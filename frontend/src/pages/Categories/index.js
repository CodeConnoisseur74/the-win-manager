import React, { useEffect, useState } from 'react';
import { Button, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Dialog, DialogTitle, DialogActions, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import useRequestResource from 'src/hooks/useRequestResource';
import ColorBox from "src/components/ColorBox";

export default function Categories() {
    const { getResourceList, resourceList, deleteResource } = useRequestResource({ endpoint: "categories", resourceLabel: "Category" });
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    useEffect(() => {
        getResourceList();
    }, [getResourceList]);

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

    return (
        <div>
            {/* Delete confirmation dialog */}
            <Dialog open={open} onClose={handleDeleteClose}>
                <DialogTitle>
                    Are you sure you want to delete this category?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDelete} color="primary">
                        Yes
                    </Button>
                    <Button onClick={handleDeleteClose} color="secondary">
                        No
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Create category button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
                <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    to="/categories/create"
                >
                    Create Category
                </Button>
            </Box>

            {/* Display message if no categories exist */}
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
                        No categories found
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
                        Please click the "Create Category" button to create your first category. You can color code your categories by either choosing a color or customizing your own color by providing the HEX color code.
                    </Typography>
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 360 }} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Color</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resourceList.results.map((r) => (
                                <TableRow key={r.id}>
                                    <TableCell align="left">{r.name}</TableCell>
                                    <TableCell align="left">
                                        <ColorBox color={`#${r.color}`} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                            <Link to={`/categories/edit/${r.id}`} key="category-edit">
                                                <IconButton size="large">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                            <IconButton size="large" onClick={() => handleConfirmDelete(r.id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}
