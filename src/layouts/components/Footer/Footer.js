import classNames from 'classnames/bind';
import style from './Footer.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(style);
function Footer() {
    return (
        <Container className={cx('wrapper')}>
            <div className={cx('footer-border')}></div>
            <Col className="d-flex justify-content-center">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sisterstailor/">
                    <FontAwesomeIcon className={cx('instagram-icon')} icon={faInstagram} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+84905911432">
                    <FontAwesomeIcon className={cx('whatapp-icon')} icon={faWhatsapp} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sisterstailor">
                    <FontAwesomeIcon className={cx('facebook-icon')} icon={faFacebookF} />
                </a>
            </Col>
            <p className={cx('copyright')}>Copyright 2023 © Sisters Tailor</p>
        </Container>
    );
}

export default Footer;
