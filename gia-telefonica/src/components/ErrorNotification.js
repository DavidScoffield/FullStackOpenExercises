import React from 'react'
import '../index.css'

export const showErrorNotification = ({ msg, setNewErrorNotification }) => {
  setNewErrorNotification(msg)
  setTimeout(() => {
    setNewErrorNotification(null)
  }, 5000)
}

const ErrorNotification = ({ message }) => {
  return <div className='error'>{message}</div>
}

export default ErrorNotification
