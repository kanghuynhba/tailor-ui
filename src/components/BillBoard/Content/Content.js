import classNames from 'classnames/bind';
import style from './Content.module.scss';
import { Card } from 'react-bootstrap';

const cx = classNames.bind(style);
function Content() {
    return (
        <Card bsPrefix={cx('wrapper')}>
            <Card.Header bsPrefix={cx('header')}>SISTER TAILOR</Card.Header>
            <Card.Body bsPrefix={cx('body')}>Established in 2018</Card.Body>
        </Card>
    );
}

export default Content;
