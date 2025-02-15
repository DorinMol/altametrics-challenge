import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import useLogin from '../../hooks/useLogin';
import validationSchema from './utils';

type TFormValues = {
  email: string;
  password: string;
};

function Login() {
  const { mutate: login, isPending } = useLogin();
  const formik = useFormik<TFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        login(values);
      } catch (error) {
        console.error(error);
      } finally {
        formik.resetForm();
      }
    },
  });

  return (
    <Box sx={{ width: 500 }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="Your email address"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Minimum 8 characters"
            variant="standard"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isPending}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default Login;
