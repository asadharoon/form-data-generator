'use strict';
let formData = new FormData();
const generateFormData = function (formData, values, prevKey, exclude) {
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
        if (prevKey == '') {
        } else key = prevKey + '[' + key + ']';

        generateFormData(formData, val, key);
      } else if (typeof val === 'object') {
        // is object
        var pKey = key;
        if (prevKey !== '') {
          pKey = prevKey + '[' + key + ']';
        }
        generateFormData(formData, val, pKey);
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
generateFormData(formData, { projects: [{ name: 'P1', roles: ['R1', 'R2'] }] }, '');

for (let key of formData.entries()) {
  console.log(`${key[0]}: ${key[1]}`);
}
