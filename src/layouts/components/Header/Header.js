import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import config from '~/config';
import { Col, Image, Row } from 'react-bootstrap';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
        <Navbar expand="sm" bsPrefix={cx('bg-body-tertiary navbar')}>
            <Container>
                <Row className="align-items-center">
                    <Col xs={6} md={{ span: 2, offset: 0 }}>
                        <Navbar.Brand href={config.routes.home}>
                            <Image src={images.logo} fluid />
                        </Navbar.Brand>
                    </Col>
                    <Col xs={{ offset: 4 }} sm={{ offset: 0 }} md={{ offset: 0 }}>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-xxl`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>Sister Tailor</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Nav className="me-auto">
                                <Nav.Link bsPrefix={cx('nav-link')} href={config.routes.home}>
                                    HOME
                                </Nav.Link>
                                <NavDropdown bsPrefix={cx('nav-link')} title="ABOUT US" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={config.routes.about}>Action</NavDropdown.Item>
                                    <NavDropdown.Item href={config.routes.about}>Another action</NavDropdown.Item>
                                    <NavDropdown.Item href={config.routes.about}>Something</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown bsPrefix={cx('nav-link')} title="SERVICES" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={config.routes.services}>Action</NavDropdown.Item>
                                    <NavDropdown.Item href={config.routes.services}>Another action</NavDropdown.Item>
                                    <NavDropdown.Item href={config.routes.services}>Something</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link bsPrefix={cx('nav-link')} href={config.routes.contact}>
                                    CONTACT
                                </Nav.Link>
                            </Nav>
                        </Navbar.Offcanvas>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;
