
import React, { Component } from 'react';
import './loader.css';
import loader from '../../asset/images/spiner.svg';

class Loader extends Component {

  render(){
    return (
      <div className='upload-loading-img'>
        <div className='upload-loading'>
          <img
            src={loader}
            alt='loader'
          />
        </div>
      </div>
    )
  }
}

export default Loader;
