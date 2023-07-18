import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './sharedLayout.module';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors.js';

export const SharedLayout = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Header>
        <Logo>YOUR CONTACT BOOK APP</Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          {isLogin ? (
            <Link to="/contacts"> Contacts</Link>
          ) : (
            <>
              <Link to="/registration">Sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};
