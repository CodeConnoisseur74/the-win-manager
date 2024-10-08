import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Formik } from "formik";
import * as yup from "yup";
import useRequestAuth from 'src/hooks/useRequestAuth';
import { Link } from 'react-router-dom';

const validationSchema = yup.object({
    username: yup.string().required("Email Address / Username is required"),
    password: yup.string().required("Password is required")
});

export default function SignIn() {
    const { login, loading } = useRequestAuth();
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (values) => {
        login(values);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                {/* Responsive Typography for "The Wins Manager" */}
                <Typography
                    component="h1"
                    variant="h4" // Change this to adjust the heading style
                    sx={{
                        fontSize: {
                            xs: '1.8rem', // small screens
                            sm: '2.5rem', // medium screens
                            md: '3rem',   // large screens
                            lg: '3.5rem', // extra large screens
                        },
                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                    }}
                >
                    The Wins Manager
                </Typography>


                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Formik validationSchema={validationSchema} validateOnBlur={false} onSubmit={handleSubmit} initialValues={{
                    username: "",
                    password: ""
                }}>
                    {(formik) => {
                        return (
                            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username / Email Address"
                                    name="username"
                                    autoFocus
                                    {...formik.getFieldProps("username")}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"} // Toggle between text and password
                                    id="password"
                                    {...formik.getFieldProps("password")}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
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
                                        <Link to="/auth/signup" key="signup" >
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    }}
                </Formik>
            </Box>
        </Container>
    );
}
