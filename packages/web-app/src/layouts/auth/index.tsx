import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import LayoutRedirect from '../../components/layoutRedirect';
import { ERoutes } from '../../models/api';

function AuthLayout() {
  return (
    <LayoutRedirect to={ERoutes.invoices} needsAuth={false}>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            p: 2,
            justifyContent: 'center',
            width: { xs: '100%', md: '40%', lg: '35%', xl: '30%' },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </LayoutRedirect>
  );
}

export default AuthLayout;
