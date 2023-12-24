import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import BillBoard from '~/components/BillBoard';

const cx = classNames.bind(style);
function Home() {
    return (
        <Container fluid bsPrefix={cx('main-view')}>
            <Row>
                <Col bsPrefix={cx('billboard')}>
                    <BillBoard />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
