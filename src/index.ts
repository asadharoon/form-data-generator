
export const generateFormData = (formData:FormData, values:any, prevKey:String = ""):void => {
  for (let key in values) {
    let val = values[key];
    if (Array.isArray(val)) {
      // is array
      key = `${prevKey}${key}`;
      generateFormData(formData, val, key);
    } else if (typeof val === "object") {
      // is object
      let pKey = key;
      if (prevKey != "") {
        pKey = `${prevKey}[${key}]`;
      }
      generateFormData(formData, val, pKey);
    } else {
      // key value pair
      if (prevKey === "") {
        formData.append(key, val);
      } else {
        formData.append(`${prevKey}[${key}]`, val);
      }
    }
  }
  return;
};

