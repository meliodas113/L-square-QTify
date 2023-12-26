import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './styles.css';

import { Box, Grid, Item } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import SongCard from '../SongCard';
import Carousel from '../Carousel';

function Section({ heading, api }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/${api}`
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
    <Box className='Section'>
      <Box className='Section-Heading'>
        <p>{heading}</p>
        <p
          onClick={() => setExpand((exp) => !exp)}
          className='Section-SubHeading'
        >
          {expand ? 'Collapse' : 'Show all'}
        </p>
      </Box>
      <Box
        className='Section-Grid'
        sx={{ width: '90%', height: expand ? 'auto' : '270px' }}
      >
        {expand ? (
          data &&
          data.map((item) => {
            return (
              <Tooltip
                title={`${item.songs.length} Song`}
                placement='top-start'
              >
                <Box key={item.id} className='Section-Card'>
                  <SongCard
                    image={item.image}
                    follows={item.follows}
                    title={item.title}
                  />
                </Box>{' '}
              </Tooltip>
            );
          })
        ) : (
          <Carousel url={api}/>
        )}
      </Box>
    </Box>
  );
}

Section.propTypes = {};

export default Section;
