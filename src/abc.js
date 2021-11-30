'use strict';

Object.defineProperty(exports, '__esModule', { value: true });
exports.generateFormData = function (formData, values, prevKey, exclude) {
  if (prevKey === void 0) {
    prevKey = '';
  }
  if (exclude === void 0) {
    exclude = [];
  }
  for (var key in values) {
    if (values.hasOwnProperty(key)) {
      var val = values[key];
      if (typeof key === 'string' && exclude.indexOf(key) !== -1) {
        continue;
      }
      if (Array.isArray(val)) {
        // is array
        key = prevKey + '[' + key + ']';
        exports.generateFormData(formData, val, key);
      } else if (typeof val === 'object') {
        // is object
        var pKey = key;
        if (prevKey !== '') {
          pKey = prevKey + '[' + key + ']';
        }
        exports.generateFormData(formData, val, pKey);
      } else {
        // key value pair
        if (prevKey === '') {
          formData.append(key, val);
        } else {
          formData.append(prevKey + '[' + key + ']', val);
        }
      }
    }
  }
  return;
};
exports.generateFormData(formData, { projects: [{ name: 'P1', roles: ['R1', 'R2'] }] }, '');
