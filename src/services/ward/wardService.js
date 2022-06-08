import axios from "axios"
import ApiDomain from "../../api/constants";


const wardService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/Ward/get-all-ward`)
    },
    deleteAsync: (id) => {
        return axios.delete(`${ApiDomain}/api/Ward/delete-ward/${id}`)
    }
}

export default wardService;