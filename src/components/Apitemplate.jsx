//api call template

import 'bootstrap/dist/css/bootstrap/min.css';
import axios from 'axios';

function AppApi() {

    axios.request('apicallhere')
    .then((response) => {
        console.log(response);
    })

    //return()
};

export default AppApi