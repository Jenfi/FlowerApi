import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

export const LoadingSpinner = () => {
  return (
    <Loader
      type="Puff"
      color="#000"
      height={80}
      width={80}
      timeout={3000} />
  );
}