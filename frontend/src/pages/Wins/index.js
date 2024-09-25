import React, { useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography, Pagination } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Masonry from "react-masonry-css";

import WinListItem from './WinListItem';
import useRequestResource from 'src/hooks/useRequestResource';
import Filters from "./Filters";

const pageSize = 6;

const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
};

export default function Wins() {
    const { resourceList, getResourceList, deleteResource, updateResource } = useRequestResource({ endpoint: "wins", resourceLabel: "Win" });
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const handleUpdateCompleted = (win) => {
        updateResource(win.id, {
            completed: !win.completed
        });
    };

    const handleConfirmDelete = (id) => {
        setIdToDelete(id);
        setOpen(true);
    };

    const handleDeleteClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        deleteResource(idToDelete);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search);

    const handleChangePagination = (event, value) => {
        const newQuery = {
            ...query,
            page: value
        };
        const newSearch = queryString.stringify(newQuery);
        navigate(`${location.pathname}?${newSearch}`);
    };

    const onSubmitSearch = (values) => {
        const { completed, priority, search, category } = values;
        const newQuery = {
            completed: completed === "True" || completed === "False" ? completed : undefined,
            priority: priority === "all" ? undefined : priority,
            category: category === "all" ? undefined : category,
            search: search
        };
        const newSearch = queryString.stringify(newQuery);
        navigate(`${location.pathname}?${newSearch}`);
    };

    useEffect(() => {
        getResourceList({ query: location.search });
    }, [getResourceList, location.search]);

    return (
        <div>
            {/* Delete confirmation dialog */}
            <Dialog open={open} onClose={handleDeleteClose}>
                <DialogTitle>
                    Are you sure you want to delete this win?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete}>
                        Yes
                    </Button>
                    <Button onClick={handleDeleteClose}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>

            <Filters onSubmit={onSubmitSearch} />

            <Typography
                variant="subtitle1"
                sx={{
                    marginLeft: (theme) => theme.spacing(1),
                    marginBottom: (theme) => theme.spacing(2)
                }}
                color="text.primary"
            >
                {`Total wins: ${resourceList.count || 0}`}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3, mt: 3 }}>
                <Button component={Link}
                    variant="contained"
                    color="primary"
                    to="/wins/create"
                >
                    Create Win
                </Button>
            </Box>

            {/* Display instructional message when no wins are found */}
            {resourceList.results.length === 0 ? (
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: {
                                xs: '1rem', // Small screens
                                sm: '1.25rem', // Medium screens
                                md: '1.5rem', // Large screens
                            },
                            fontWeight: "bold",
                        }}
                    >
                        No wins found
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: {
                                xs: '0.85rem', // Small screens
                                sm: '1rem', // Medium screens
                                md: '1.1rem', // Large screens
                            },
                            color: "text.secondary",
                        }}
                    >
                        Please click the "Create Win" button to create your first win. Wins can be organized by categories and priorities, and you can mark them as completed once done.
                    </Typography>
                </Box>
            ) : (
                <Masonry breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName='my-masonry-grid_column'>
                    {resourceList.results.map((win) => {
                        return (
                            <div key={win.id}>
                                <WinListItem win={win} handleConfirmDelete={handleConfirmDelete}
                                    handleUpdateCompleted={handleUpdateCompleted}
                                />
                            </div>
                        );
                    })}
                </Masonry>
            )}

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Pagination
                    color="primary"
                    count={Math.ceil(resourceList.count / pageSize)}
                    page={query.page ? parseInt(query.page) : 1}
                    onChange={handleChangePagination}
                />
            </Box>
        </div>
    );
}
