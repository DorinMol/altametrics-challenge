import { Box, Button, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import LayoutRedirect from '../../components/layoutRedirect';
import { ERoutes } from '../../models/api';
import store from '../../store';

const AppLayout = () => {
  const resetStore = store((state) => state.resetStore);
  return (
    <LayoutRedirect to={ERoutes.login} needsAuth={true}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: grey[100],
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h3" sx={{ alignSelf: 'left' }}>
            Altametrics Challenge
          </Typography>
          <Button
            size="small"
            variant="contained"
            onClick={() => resetStore()}
            sx={{
              alignSelf: 'center',
            }}
          >
            Logout
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'center',
            p: 2,
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </LayoutRedirect>
  );
};

export default AppLayout;
