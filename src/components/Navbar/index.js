import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '../CustomButton';

function Navbar(props) {
  return (
    <nav className='NavBar'>
      <img src='/assets/logo.png' width={67} height={34} alt='Qtify' />
      <Box className="NavBar-InputContainer">
      <input className="NavBar-Input" placeholder='Search' type="text" id="fname" name="fname"/>
      <Box className="NavBar-Search"><SearchIcon/></Box>
      </Box>
      <CustomButton text={"Give FeedBack"}/>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
