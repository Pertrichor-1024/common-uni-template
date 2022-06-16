import Loading from './loading';
import _Storage from './storage';
import * as Date from './date';
import * as Plateform from './platform';

export default {
  Loading,
  _Storage,
  ...Date,
  ...Plateform,
};
