import axios from "axios";

export default function (url, data, method = "GET") {
    return axios({
        url,
        method, data,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            "Content-Type": "application/json",
        }
    })
}