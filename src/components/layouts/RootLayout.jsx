import { Container, Footer, NavBar } from '../../components'

// eslint-disable-next-line react/prop-types
function RootLayout({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
}

export default RootLayout;