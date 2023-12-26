import classNames from 'classnames/bind';
import style from './Reviews.module.scss';
import { Card, Container } from 'react-bootstrap';
import { ElfsightWidget } from 'react-elfsight-widget';

const cx = classNames.bind(style);
function Reviews() {
    return (
        <Container bsPrefix={cx('wrapper')}>
            <div className={cx('background')}>
                <Card.Header bsPrefix={cx('header')}>REVIEW US</Card.Header>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('review-link')}
                    href="https://g.page/r/Cd6pLbxAnhRQEBM/review"
                >
                    Write a review →
                </a>
            </div>
            <ElfsightWidget className={cx('review')} widgetId="6f13ccad-6414-4878-8d47-23e35446d6a4" lazy />
            <div className={cx('cover')}></div>
        </Container>
    );
}

export default Reviews;
