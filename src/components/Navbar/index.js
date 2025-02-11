import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from '../CustomButton';
import Logo from '../Logo';

function Navbar(props) {
  return (
    <nav className='NavBar'>
      <Logo src={'/assets/logo.png'}/>
      <Box className="NavBar-InputContainer">
      <input className="NavBar-Input" placeholder='Search a song of your choice' type="text" id="fname" name="fname"/>
      <Box className="NavBar-Search"><SearchIcon/></Box>
      </Box>
      <CustomButton text={"Give Feedback"}/>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
