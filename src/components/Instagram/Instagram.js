import classNames from 'classnames/bind';
import style from './Instagram.module.scss';
import { Container, Card } from 'react-bootstrap';
import { ElfsightWidget } from 'react-elfsight-widget';

const cx = classNames.bind(style);
function Instagram() {
    return (
        <Container bsPrefix={cx('wrapper')}>
            <div className={cx('background')}>
                <Card.Header bsPrefix={cx('header')}>LATEST POSTS</Card.Header>
            </div>
            <ElfsightWidget className={cx('feed')} widgetId="63326e83-6587-4d26-a196-aa05d639e365" lazy />
            <div className={cx('cover')}></div>
        </Container>
    );
}

export default Instagram;
