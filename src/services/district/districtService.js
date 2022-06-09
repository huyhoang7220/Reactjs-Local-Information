import axios from "axios"
import ApiDomain from "../../api/constants";
import apiHeper from "../../api/axios";

const districtService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/District/get-all-district`)
    },
    deleteAsync: (id) => {
        return apiHeper.delete(`${ApiDomain}/api/District/delete-district/${id}`)
    },
    postAsync: (model) => {
        return apiHeper.post(`${ApiDomain}/api/District/post-district`, model)
    },
}

export default districtService;