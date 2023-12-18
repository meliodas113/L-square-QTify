import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

import { Box } from '@mui/material';

function CustomButton({text}) {
  return (
    <button className="CustomButton">{text}</button>
  )
}

CustomButton.propTypes = {}

export default CustomButton
