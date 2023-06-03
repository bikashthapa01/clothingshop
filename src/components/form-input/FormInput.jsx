import React from 'react'

export const FormInput = ({label,...otherProps}) => {
  return (
    <div className='form-input-control'>
        <label>{label}</label>
        <input {...otherProps}/>
    </div>
  )
}
