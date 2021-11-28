const axios = require('axios');

const jsonFile= require('./report/result.json');

const data=JSON.stringify(jsonFile);
  
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiJiNTUzNTRhZC0wZmFlLTM3OWYtYjkxOS1mNzgwM2I4YWFiZTgiLCJhY2NvdW50SWQiOiI3MDEyMTo1ZTA0MzUyNC1iZmQyLTQ2YzEtYjVjMy0yNGYzYjc1Mjk1N2QiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTYzNzk0NzkwNiwiZXhwIjoxNjM4MDM0MzA2LCJhdWQiOiJCNjUzRTAyODY4NUI0NjVDODgyMkY1QzJGN0VCNzY0OSIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IkI2NTNFMDI4Njg1QjQ2NUM4ODIyRjVDMkY3RUI3NjQ5In0.IjzZjZJg47-Td0ahdcYCfBMg4xsmLfwWFlcB0dT8_wo';
  

axios.post('https://xray.cloud.getxray.app/api/v2/import/execution/cucumber', data,{
    headers: { 
        'Content-Type': 'application/json' ,
        'Authorization': 'Bearer ' +token
    }
}).then((res) => {

        console.log(`Status: ${res.status}`);

        console.log('Body: ', res.data);

    }).catch((err) => {

        console.error(err);

    });




