import axios from "axios";
import urls from "../../urls";

export function updateName(oldName,newName){
    return axios.get(urls.updateUser+"?old="+oldName+"&new="+newName).then(response=>response.data)
}