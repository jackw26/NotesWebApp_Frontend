import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Nav
} from 'react-bootstrap'
import { User } from '../models/user'
import NavBarLoggedInView from './NavBarLoggedInView'
import NavBarLoggedOutView from './NavBarLoggedOutView'
import { Link } from 'react-router-dom'

interface NavBarProps {
  loggedInUser: User | null
  onSignUpClicked: () => void
  onLogInClicked: () => void
  onLogoutSuccessful: () => void
}

const NavBar = ({
  loggedInUser,
  onSignUpClicked,
  onLogInClicked,
  onLogoutSuccessful
}: NavBarProps) => {
  return (
    <Navbar bg='primary' variant='dark' expand='sm' sticky='top'>
      <Container>
        <NavbarBrand as={Link} to='/'>Cool Notes App</NavbarBrand>
        <NavbarToggle aria-controls='main-navbar' />
        <NavbarCollapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} to='/privacy'>
              Privacy
            </Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {loggedInUser ? (
              <NavBarLoggedInView
                user={loggedInUser}
                onLogoutSuccessful={onLogoutSuccessful}
              />
            ) : (
              <NavBarLoggedOutView
                onLoginClicked={onLogInClicked}
                onSignUpClicked={onSignUpClicked}
              />
            )}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
