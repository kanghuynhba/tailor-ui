import classNames from 'classnames/bind';
import style from './BillBoard.module.scss';
import { Carousel, Image, OverlayTrigger } from 'react-bootstrap';
import images from '~/assets/images';

const cx = classNames.bind(style);
function BillBoard() {
    return (
        <>
            <Carousel wrap controls={false} indicators={false}>
                <Carousel.Item>
                    <div className={cx('overlay')}></div>
                    <Image fluid src={images.thumbnail_1} />
                </Carousel.Item>
                <Carousel.Item>
                    <div className={cx('overlay')}></div>
                    <Image fluid src={images.thumbnail_2} />
                </Carousel.Item>
                <Carousel.Item>
                    <div className={cx('overlay')}></div>
                    <Image fluid src={images.thumbnail_3} />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default BillBoard;
