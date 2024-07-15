/* eslint-disable import/no-unresolved */
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from "swiper";
import {
    Swiper,
    // SwiperSlide
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";

function CustomSwiper({ children, ...props }) {
    return (
        <Swiper
            modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y, Mousewheel]}
            // spaceBetween={30}
            // slidesPerView={5}
            navigation
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
                // type: "progressbar"
            }}
            {...props}
            // scrollbar={{ draggable: true }}
        >
            {children}
        </Swiper>
    );
}

CustomSwiper.defaultProps = {
    loop: true,
    mousewheel: true,
    breakpoints: {
        200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
};

CustomSwiper.propTypes = {
    loop: PropTypes.bool,
    mousewheel: PropTypes.bool,
    children: PropTypes.node.isRequired,
    breakpoints: PropTypes.objectOf(),
};
export default CustomSwiper;
