import React, { useState, useEffect, useRef, useCallback } from 'react';
import './styles.css';
import axios from 'axios';

import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SongCard from '../SongCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Carousel({ url, tabs, filter }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          tabs
            ? `https://qtify-backend-labs.crio.do/${url}`
            : `https://qtify-backend-labs.crio.do/albums/${url}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Box style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Box className='nav-btn' onClick={handlePrev}>
          <img src='/assets/arrow-l.png' width={32} height={32} alt='Qtify' />
        </Box>
        <Swiper
          ref={sliderRef}
          slidesPerView={7}
          spaceBetween={10}
          loop={true}
          className='mySwiper'
        >
          {tabs
            ? data &&
              (filter === 'all'
                ? data.map((item) => {
                    return (
                      <SwiperSlide>
                        <Box key={item.id} className='Section-Card'>
                          <SongCard
                            image={item.image}
                            follows={item.likes}
                            title={item.title}
                            tabs={tabs}
                          />
                        </Box>{' '}
                      </SwiperSlide>
                    );
                  })
                : data
                    .filter((item) => item.genre.label === filter)
                    .map((item) => {
                      return (
                        <SwiperSlide>
                          <Box key={item.id} className='Section-Card'>
                            <SongCard
                              image={item.image}
                              follows={item.likes}
                              title={item.title}
                              tabs={tabs}
                            />
                          </Box>{' '}
                        </SwiperSlide>
                      );
                    }))
            : data &&
              data.map((item) => {
                return (
                  <SwiperSlide>
                    <Box key={item.id} className='Section-Card'>
                      <SongCard
                        image={item.image}
                        follows={item.follows}
                        title={item.title}
                      />
                    </Box>{' '}
                  </SwiperSlide>
                );
              })}
        </Swiper>
        <Box className='nav-btn' onClick={handleNext}>
          <img src='/assets/arrow-r.png' width={32} height={32} alt='Qtify' />
        </Box>{' '}
      </Box>
    </>
  );
}

export default Carousel;
