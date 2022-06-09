import axios from "axios"
import ApiDomain from "../../api/constants";
import apiHeper from "../../api/axios";

const wardService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/Ward/get-all-ward`)
    },
    deleteAsync: (id) => {
        return apiHeper.delete(`${ApiDomain}/api/Ward/delete-ward/${id}`)
    },
    postAsync: (model) => {
        return apiHeper.post(`${ApiDomain}/api/Ward/post-ward`, model)
    },
    postUpdateAsynce: (model) => {
        return apiHeper.post.wardService(`${ApiDomain}/api/Ward/update-ward`, model)
    }
}

export default wardService;