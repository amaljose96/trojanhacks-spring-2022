import axios from "axios"
import urls from "../../urls"
export function loginService(username){
    return axios.get(urls.login+"?username="+username).then(res=>res.data)
}