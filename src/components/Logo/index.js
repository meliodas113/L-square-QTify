import React from 'react'
import PropTypes from 'prop-types'

function Logo({src}) {
  return (
    <img src={src} width={67} height={34} alt='Qtify' />
  )
}

Logo.propTypes = {}

export default Logo
