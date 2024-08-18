import React, { useEffect, useState } from 'react';
import { Formik } from "formik";
import { Grid, TextField, Typography, Paper, Button, Box } from "@mui/material";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryDetails() {

    const [initialValues, setInitialValues] = useState({
        name: "",
        color: ""
    });
    return (
        <Paper sx={{
            borderRadius: "2px",
            boxShadow: (theme) => theme.shadows[5],
            padding: (theme) => theme.spacing(2, 4, 3)
        }}>
            <Typography variant="h6" mb={4}>
                Create Category
            </Typography>
            <Formik>
                {(formik) => {
                    return (
                        <form>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField>
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </form>
                    );
                }}
            </Formik>
        </Paper >
    );
}