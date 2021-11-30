export const generateFormData = (formData:FormData, values:any, prevKey:string = "",exclude:string[]=[]):void => {
  for (let key in values) {

    if(values.hasOwnProperty(key)){
        const val = values[key];
        
        if(typeof key==='string' && exclude.indexOf(key)!==-1){
          continue;
        } 
        if (Array.isArray(val)) {
          // is array
          if (prevKey !== '') {
            key = prevKey + '[' + key + ']';
          } 
  
          generateFormData(formData, val, key);
        } else if (typeof val === "object") {
          // is object
          let pKey = key;
          if (prevKey !== "") {
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
    
  }
  return;
};

