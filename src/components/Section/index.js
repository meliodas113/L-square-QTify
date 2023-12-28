import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './styles.css';

import { Box, Grid, Item } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import SongCard from '../SongCard';
import Carousel from '../Carousel';

function Section({ heading, api, tabs }) {
  const [data, setData] = useState(null);
  const [tabsData, setTabsData] = useState(null);
  const [error, setError] = useState(null);
  const [expand, setExpand] = useState(false);
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          tabs
            ? `https://qtify-backend-labs.crio.do/${api}`
            : `https://qtify-backend-labs.crio.do/albums/${api}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    const fetchTabsData = async () => {
      try {
        const response = await axios.get(
          `https://qtify-backend-labs.crio.do/genres`
        );
        setTabsData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchTabsData();
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
          {!tabs && (expand ? 'Collapse' : 'Show all')}
        </p>
      </Box>
      {tabs ? (
        <Box>
          <TabContext value={value}>
            <Box sx={{ color: 'white', fontFamily: 'Poppins' }}>
              <TabList
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab
                  label={<span className='Tabs-Label'>All</span>}
                  value='1'
                />
                {tabsData &&
                  tabsData.data.map((item, index) => (
                    <Tab
                      key={item.label}
                      label={<span className='Tabs-Label'>{item.label}</span>}
                      value={`${index + 2}`}
                    />
                  ))}
              </TabList>
            </Box>
            <TabPanel value='1'>
              {' '}
              <Carousel url={api} tabs={tabs} filter='all' />
            </TabPanel>
            {tabsData &&
              tabsData.data.map((item, index) => (
                <TabPanel value={`${index + 2}`}>
                  {' '}
                  <Carousel url={api} tabs={tabs} filter={item.label} />
                </TabPanel>
              ))}
            <TabPanel value='2'>Item Two</TabPanel>
            <TabPanel value='3'>
              I<span className='Tabs-Label'>All</span>
            </TabPanel>
          </TabContext>
        </Box>
      ) : (
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
            <Carousel url={api} tabs={tabs} />
          )}
        </Box>
      )}
    </Box>
  );
}

Section.propTypes = {};

export default Section;
