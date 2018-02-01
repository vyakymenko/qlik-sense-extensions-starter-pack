import { Log } from '../../API/Util';

define([
  'qlik',
  'css!./css/styles.css'
], (qlik) => {
  return {
    paint($element, layout) {
      $element.empty();
      $element.append(`<p>Hello QlikSense</p>`);

      Log(`Hello world!`)
    }
  };
});


