import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { Box } from '@mui/material';

function Hero(props) {
  return (
    <Box className="Hero">
      <p className='Hero-Heading'>
        100 Thousand Songs, ad-free
        <br />
        Over thousands podcast episodes
      </p>
      <img src="/assets/vibrating-headphone.png" width={212} height={212} alt='Qtify' />
    </Box>
  );
}

Hero.propTypes = {};

export default Hero;
