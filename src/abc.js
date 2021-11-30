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
generateFormData(
  formData,
  {
    working_hours: {
      to: '19:00',
      from: '10:00',
    },
    education: {
      degree: 'BS',
      degreeTitle: 'Computer Science',
      Institute: 'COMSATS',
    },
    flexible_working_hours: true,
    is_available: 'fulltime',
    _id: '61a5c0f40e34d57e55732eaf',
    profile_image: 'http://localhost:3000/uploads/1638252874669-pexels-photo-220453.jpeg',
    name: 'Asad',
    designation: 'Software Engineer',
    available_from: '2021-12-01',
    employee_id: '2500',
    projects_completed: 50,
    work_start_date: '2021-11-01',
    joining_date: '2015-11-30',
    salary_month: '10000',
    skills: [
      {
        name: 'Android',
        percentage: 100,
      },
      {
        name: 'IOS',
        percentage: 50,
      },
    ],
    career_profile: '<p>Career Profile....</p>',
    projects: [
      {
        roles: ['r1', 'r2'],
        name: 'ABC',
        description: '<p>descr</p>',
        features: 'features',
        tools: 'tools',
      },
    ],
    createdAt: '2021-11-30T06:13:08.520Z',
    updatedAt: '2021-11-30T07:17:36.636Z',
    __v: 7,
    experience: 6,
    userId: '61728eb1efb2173bc057ec3c',
  },
  '',
);

for (let key of formData.entries()) {
  console.log(`${key[0]}: ${key[1]}`);
}
