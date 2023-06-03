import React from 'react'
import "./Button.styles.scss"

const BUTTON_TYPE = {
    google:"google-sign-in",
    inverted:"inverted"
}

export const Button = ({children,buttonType,...otherProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...otherProps}>{children}</button>
  )
}

