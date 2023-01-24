import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from '../App';
import ThemeSwitch from './ThemeSwitch';

export default function Header(props) {

    //const [mode, setMode] = useContext(ThemeContext);

    const links = [
        { "link":"/","name":"Posts" },
        { "link":"/posts2","name":"Posts 2" },
        { "link":"/todo","name":"To-do" },
        { "link":"/debounce","name":"Debounce" },
    ]

    const theme = useContext(ThemeContext);

    //const theme = mode ? ' light' : ' dark';

  return (<>
    <Navbar className={"navbar-main navbar-"+theme.themeMode} expand="lg">
      <Container className={"max-w-7xl mx-auto navbar-"+theme.themeMode}>
        <h5 className='m-3 mx-3'>Experiments</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links?.map( (x) => 
                <NavLink
                    to={x.link}
                    key={uuidv4()}
                    className={ ({isActive}) => {
                        return (
                            "px-2 p-2 no-underline navbar-"+theme.themeMode+
                            (isActive ? " font-bold text-blue-500 max-[600px]:bg-blue-100" : " navbar-"+theme.themeMode)
                        )
                    } }
                    >{x.name}</NavLink>
             )}
          </Nav>
          <ThemeSwitch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className={'mx-auto pt-3 '+theme.themeMode}>
        <div className='max-w-7xl mx-auto'>{props.children}</div>
    </div>
    </>
  );
}