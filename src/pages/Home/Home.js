import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { Container } from 'react-bootstrap';
import BillBoard from '~/components/BillBoard';
import Reviews from '~/components/Reviews';
import Instagram from '~/components/Instagram';

const cx = classNames.bind(style);
function Home() {
    return (
        <Container bsPrefix={cx('main-view')}>
            <BillBoard />
            <Reviews />
            <Instagram />
        </Container>
    );
}

export default Home;
