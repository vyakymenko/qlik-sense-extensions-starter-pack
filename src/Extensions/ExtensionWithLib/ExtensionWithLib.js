import './lib/moment.min.js'

import { Log } from '../../API/Util';

define([
  'qlik',
  'css!./css/styles.css'
], (qlik) => {
  return {
    paint($element, layout) {
      $element.empty();
      $element.append(`<h1>Hello QlikSense! Moment: ${moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>`);

      Log(`Hello world!`)
    }
  };
});


