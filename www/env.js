var exec = require("cordova/exec");

var Env = {
  /**
   * Returns the external storage state.
   *
   * @param {function} successCB
   * @param {function} errorCB
   *
   * @return Object.value {String}: the external storage state.
   * Example
   *    Env.getExternalStorageState(function(state) {console.log(state);},
   *                      function(error) {console.log(error);});
   */
  getExternalStorageState: function (successCB, errorCB) {
    exec(successCB, errorCB, "Env", "getExternalStorageState", []);
  },
  /**
   * Returns whether the external storage is emulated.
   *
   * @param {function} successCB
   * @param {function} errorCB
   *
   * @return Object.value {String}: "true" if the external storage state is emulated.
   *
   * Example
   *    Env.isExternalStorageEmulated(function(isEmulated) {console.log(isEmulated);},
   *                      function(error) {console.log(error);});
   */
  isExternalStorageEmulated: function (successCB, errorCB) {
    exec(successCB, errorCB, "Env", "isExternalStorageEmulated", []);
  },
  /**
   * Returns whether the external storage is removable.
   *
   * @param {function} successCB
   * @param {function} errorCB
   *
   * @return Object.value {String}: "true" if the storage is removable.
   *
   * Example
   *    Env.isExternalStorageRemovable(function(isRemovable) {console.log(isRemovable);},
   *                      function(error) {console.log(error);});
   */
  isExternalStorageRemovable: function (successCB, errorCB) {
    exec(successCB, errorCB, "Env", "isExternalStorageRemovable", []);
  },
  /**
   * Returns whether the calling app has All Files Access on the primary shared / external storage media.
   *
   * @param {function} successCB
   * @param {function} errorCB
   *
   * @return Object.value {String}: "true" if the calling app has All Files Access.
   *
   * Example
   *    Env.isExternalStorageManager(function(isRStorageManager) {console.log(isStorageManager);},
   *                      function(error) {console.log(error);});
   */
  isExternalStorageManager: function (successCB, errorCB) {
    exec(successCB, errorCB, "Env", "isExternalStorageManager", []);
  },
  /**
   * Returns the full path to the specified special directory. Note that this API
   * is deprecated in Android API 29.
   *
   * @param {DOMString} special directory to look up
   * @param {Function} successCB
   * @param {Function} errorCB
   */
  getExternalStoragePublicDirectory: function (path, successCB, errorCB) {
    exec(successCB, errorCB, "Env", "getExternalStoragePublicDirectory", [path]);
  },

  /**
   * Returns the directory name of the specified special directory
   *
   * @param {DOMString} special directory to look up
   * @param {Function} successCB
   * @param {Function} errorCB
   */
  getDirectory: function (path, successCB, errorCB) {
    exec(successCB, errorCB, "Env", "getDirectory", [path]);
  },
};

module.exports = Env;
