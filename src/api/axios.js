import axios from 'axios';
import qs from 'qs'

const apiHeper = axios.create({
    paramsSerializer: (params) => {
        return qs.stringify(params, {
            encode: false
        })
    }
});

apiHeper.interceptors.response.use(res => {
    return res.data;
}, (err) => {
    return Promise.reject(err)
})

export default apiHeper;