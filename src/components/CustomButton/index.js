import React from 'react'
import PropTypes from 'prop-types'
import './styles.css';

import { Box } from '@mui/material';

function CustomButton({text}) {
  return (
    <Box className="CustomButton">{text}</Box>
  )
}

CustomButton.propTypes = {}

export default CustomButton
