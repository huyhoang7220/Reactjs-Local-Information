import axios from "axios"
import ApiDomain from "../../api/constants";


const provinceService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/Province/get-all-province`)
    },
    deleteAsync: (id) => {
        return axios.delete(`${ApiDomain}/api/Province/delete-province/${id}`)
    },
    postAsync :() =>{
        return axios.post(`${ApiDomain}/api/Province/post-province`)
    }
}

export default provinceService ;