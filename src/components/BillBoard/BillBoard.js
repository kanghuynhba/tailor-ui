import classNames from 'classnames/bind';
import style from './BillBoard.module.scss';
import { Carousel, Image } from 'react-bootstrap';
import images from '~/assets/images';
import Content from './Content/Content';

const cx = classNames.bind(style);
function BillBoard() {
    const items = [images.thumbnail_1, images.thumbnail_2, images.thumbnail_3];
    return (
        <Carousel fade wrap controls={false} indicators={false}>
            {items.map((item, index) => (
                <Carousel.Item key={index}>
                    <Content />
                    <Image src={item} alt="thumbnail" className="col-sm-12 overflow-hidden" />
                    <div className={cx('overlay')}></div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default BillBoard;
