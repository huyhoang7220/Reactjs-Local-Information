import axios from "axios"
import apiHeper from "../../api/axios";
import ApiDomain from "../../api/constants";

const provinceService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/Province/get-all-province`)
    },
    deleteAsync: (id) => {
        return apiHeper.delete(`${ApiDomain}/api/Province/delete-province/${id}`)
    },
    postAsync: (model) => {
        return apiHeper.post(`${ApiDomain}/api/Province/post-province`, model)
    },
    postUpdateAsync: (model) => {
        return apiHeper.post(`${ApiDomain}/api/Province/update-province`, model)
    }
}

export default provinceService;