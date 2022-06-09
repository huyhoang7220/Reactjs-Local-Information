import axios from "axios"
import ApiDomain from "../../api/constants";
import apiHeper from "../../api/axios";


const countryService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/Country/get-all-country`)
    },
    deleteAsync: (id) => {
        return apiHeper.delete(`${ApiDomain}/api/Country/delete-country/${id}`)
    },
    postAsync: (model) => {
        return apiHeper.post(`${ApiDomain}/api/Country/post-country`, model)
    },
    postUpdateAsync: (model) => {
        return axios.post(`${ApiDomain}/api/Country/update-country`,model)
    }
    // return axios.post('http://localhost:5001/api/Province/post-province/', model)    
}

export default countryService;