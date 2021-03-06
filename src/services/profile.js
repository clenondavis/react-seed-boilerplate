/**
 * @file Services/profileSvc.js
 * @class profileSvc
 * @classdesc This is the class for profile services
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 */

import { profileAct } from '../common/actions';

/**
 * @function
 * @name getInfo
 * @memberof profileSvc
 * @description show profile info
 * @return {OBJECT} Store context
 */
export const getInfo = () => (dispatch) => {
  const infoText = 'Make It Simple, But Significant';
  dispatch(profileAct.showProfileInfo(true, infoText));
};

/**
 * @function
 * @name foo
 * @memberof profileSvc
 * @description foo function as testing
 * @return {OBJECT} Store context
 */
export const foo = () => {};
