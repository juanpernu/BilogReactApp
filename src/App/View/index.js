/**
 * Module dependencies
 */
/* global window, meli_ga */
require('babel-register')({
  plugins: [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.scss'],
      },
    ],
  ],
});
import React from 'react';
const PropTypes = require('prop-types');
const { Helmet } = require('react-helmet');
const Head = require('react-declarative-head');

import Form from '../components/Form';

/**
 * View Component
 */
export default class View extends React.Component {
  getChildContext() {
    const {
      webp,
      serverTime,
      deviceType,
      webView,
      lowEnd,
      bgLettersByDevice,
    } = this.props;

    return {
      webp,
      serverTime,
      deviceType,
      webView,
      lowEnd,
      bgLettersByDevice,
    };
  }

  componentDidMount() {
  }

  render() {
    
    return (
      <div className='bilog_root'>
        <Head>
          <title>Bilog Soluciones Informáticas made whit React</title>
        </Head>
        
        <Helmet>
          <meta
            name="description"
            content= 'Bilog Soluciones Informáticas'
          />
          <meta
            name="viewport"
            content= 'width=device-width, initial-scale=1.0'
          />
        </Helmet>
        <Form />
      </div>
    );
  }
}

View.propTypes = {
};

View.childContextTypes = {
  webp: PropTypes.bool,
  serverTime: PropTypes.string,
  deviceType: PropTypes.string,
  webView: PropTypes.bool,
  lowEnd: PropTypes.bool,
  bgLettersByDevice: PropTypes.string,
};

View.defaultProps = {
};