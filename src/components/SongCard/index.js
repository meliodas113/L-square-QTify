import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { Box } from '@mui/material';

function SongCard({ image, follows, title, tabs }) {
  return (
    <Box className='SongCard'>
      <Box className='SongCard-ThumbNailContainer'>
        <Box className='SongCard-ThumbNail'>
          <img className='SongCard-Image' src={image} alt='Qtifty' />
        </Box>
        <Box className='Song-Details'>
          <Box className='Song-DetailsInfo'>
            {follows} {tabs ? 'Likes' : 'Follows'}
          </Box>
        </Box>
      </Box>
      <Box className='SongCard-Name'>{title}</Box>
    </Box>
  );
}

SongCard.propTypes = {};

export default SongCard;
