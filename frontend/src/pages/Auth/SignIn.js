import * as React from "react";
import Avatar from "@mui/material/Avatar";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as yup from "yup";
import useRequestAuth from "src/hooks/useRequestAuth";
import { Link } from "react-router-dom";
// import signInBg from "src/assets/sign-in-bg.png"; // Import the image

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to="/auth/signup" style={{ color: 'inherit', textDecoration: 'none' }}>
                The Wins Manager
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const validationSchema = yup.object({
    username: yup.string().required("Email Address / Username is required"),
    password: yup.string().required("Password is required"),
});

export default function SignIn() {
    const { login, loading } = useRequestAuth();

    const handleSubmit = (values) => {
        login(values);
    };

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage:
                        'url("/assets/sign-in-bg.png")',
                    backgroundColor: (t) =>
                        t.palette.mode === "light"
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik
                        validationSchema={validationSchema}
                        validateOnBlur={false}
                        onSubmit={handleSubmit}
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                    >
                        {(formik) => {
                            return (
                                <Box
                                    component="form"
                                    onSubmit={formik.handleSubmit}
                                    noValidate
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username / Email Address"
                                        name="username"
                                        autoFocus
                                        {...formik.getFieldProps("username")}
                                        error={
                                            formik.touched.username && Boolean(formik.errors.username)
                                        }
                                        helperText={formik.touched.username && formik.errors.username}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        {...formik.getFieldProps("password")}
                                        error={
                                            formik.touched.password && Boolean(formik.errors.password)
                                        }
                                        helperText={formik.touched.password && formik.errors.password}
                                    />

                                    <LoadingButton
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        loading={loading}
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign In
                                    </LoadingButton>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to="/auth/password-reset" key="reset-password">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link to="/auth/signup" key="signup">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            );
                        }}
                    </Formik>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </Grid>
        </Grid>
    );
}
