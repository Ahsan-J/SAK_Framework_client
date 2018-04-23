import axios from 'axios';
import {Base_Url} from '../../config.js'

export function addUser (user){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/user',
            data:user,
        }).then(function(response){
            console.log(response)
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function login(user){
    return dispatch =>{
        axios({
            method:'GET',
            url:Base_Url+'/user/fetch',
            params:user,
        }).then(function(response){
            dispatch({
                type:'LOGIN_SUCCESS',
                data:response.data
            })
        }).catch(function(response){
            console.log(response);
        })
    }
}