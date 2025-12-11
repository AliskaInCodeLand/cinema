import { Container } from '@mui/material';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
