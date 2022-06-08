import axios from "axios"
import ApiDomain from "../../api/constants";

const districtService = {
    getListAsync: () => {
        return axios.get(`${ApiDomain}/api/District/get-all-district`)
    },
    deleteAsync: (id) => {
        return axios.delete(`${ApiDomain}/api/District/delete-district/${id}`)
    }
}

export default districtService ;