import axios from 'axios';
import urls from '../../../urls';
import { getLocalProperty } from '../../../utils';
export function getUsers(){
    let username = getLocalProperty("userData").username;
    return axios.get(urls.getUsers+"?username="+username).then(response=>{
        return response.data
    })
}