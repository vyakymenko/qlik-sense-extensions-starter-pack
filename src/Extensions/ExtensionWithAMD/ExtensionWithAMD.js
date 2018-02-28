import { Log } from '../../API/Util';

define([
  'qlik',
  './lib/d3.min',
  'css!./css/styles.css'
], (qlik, d3) => {
  return {
    paint($element) {
      $element.empty();

      Log(`Hello world!`);
      Log(d3);
    }
  };
});


