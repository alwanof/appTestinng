const axios = require('axios');

const jsonFile= require('./data.json');

const data=JSON.stringify(jsonFile);
  

  

axios.post('https://jsonplaceholder.typicode.com/posts', data,{
    headers: { 'Content-Type': 'application/json;charset=UTF-8' }
}).then((res) => {

        console.log(`Status: ${res.status}`);

        console.log('Body: ', res.data);

    }).catch((err) => {

        console.error(err);

    });




