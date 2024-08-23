
import React, { useState } from 'react';
import PropTypes from "prop-types";
import { ListItemIcon, styled, Checkbox, Card, CardHeader, CardContent, IconButton, Box, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import ColorLabel from "./ColorLabel";
import priorityOptionsData from "src/data/priorityOptionsData";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "unset",
    ":hover": {
        color: theme.palette.primary.main
    }
}));

export default function WinListItem({ win, handleConfirmDelete, handleUpdateCompleted }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return <Card elevation={3} sx={{
        mb: 2,
        borderLeft: (theme) => `${theme.spacing(0.5)} solid ${priorityOptionsData[win.priority].color || "#fff"}`
    }}>
        <CardHeader sx={{
            pt: 1,
            pb: 1
        }}
            titleTypographyProps={{
                variant: "subtitle2"
            }}
            action={
                <Box>
                    <IconButton size="small" onClick={handleClick}>
                        <MoreVertIcon
                            fontSize="small"
                            id={`wins-card-action-${win.id}`}
                            aria-controls={`wins-card-menu-${win.id}`}
                            aria-expanded={open}
                        />
                    </IconButton>
                    <Menu
                        id={`wins-card-action-menu-${win.id}`}
                        aria-labelledby={`win-card-action-${win.id}`}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                    >
                        <MenuItem onClick={() => {
                            handleConfirmDelete(win.id);
                        }}>
                            <ListItemIcon>
                                <DeleteOutlineIcon fontSize="small" />
                                Delete
                            </ListItemIcon>
                        </MenuItem>
                    </Menu>
                </Box>
            }
            title={
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Checkbox
                        sx={{ padding: (theme) => `0 ${theme.spacing(0.5)} 0 0` }}
                        checked={win.completed || false}
                        onClick={() => {
                            handleUpdateCompleted(win);
                        }}
                    />
                    <StyledLink to={`/wins/edit/${win.id}`} key={"wins-edit"}>
                        {win.title}
                    </StyledLink>
                </Box>
            }
        />
        <CardContent sx={{ pt: 0.25, pb: 0.25 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <ColorLabel color={`#${win.category_color}`}>
                    {win.category_name}
                </ColorLabel>
            </Box>
        </CardContent>
    </Card>;
}

WinListItem.propTypes = {
    win: PropTypes.shape({
        completed: PropTypes.bool,
        title: PropTypes.string,
        category_name: PropTypes.string,
        category_color: PropTypes.string,
        id: PropTypes.number,
        description: PropTypes.string,
        priority: PropTypes.number,
    }),
    handleConfirmDelete: PropTypes.func,
    handleUpdateCompleted: PropTypes.func
};