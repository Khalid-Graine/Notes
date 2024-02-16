import React from 'react';
import 'swiper/css/swiper.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

// Define custom styles using styled-components
const CustomSwiper = styled(Swiper)`
    /* Your custom styles for Swiper container */
`;

const CustomPagination = styled.div`
    /* Your custom styles for pagination container */
`;

const CustomPaginationBullet = styled.div`
    /* Your custom styles for pagination dots */
`;

const MySwiperComponent = () => {
    return (
        <CustomSwiper
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            {/* Add more slides as needed */}
            <CustomPagination slot="pagination" />
            <CustomPaginationBullet slot="pagination-bullet" />
        </CustomSwiper>
    );
};

export default MySwiperComponent;
