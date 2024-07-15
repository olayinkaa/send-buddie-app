/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

// FIXME: this is not been use and not working, make it work later
export default function SwiperEffect({ children }) {
    return (
        <Swiper
            effect="flip"
            grabCursor
            pagination
            navigation
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
        >
            {children}
        </Swiper>
    );
}
