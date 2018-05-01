import axios from 'axios';
import {Base_Url} from '../../config.js'

export function addApp (newProject){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/app/add',
            data:newProject,
        }).then(function(response){
            console.log(response)
        }).catch(function(response){
            console.log(response);
        })
    }
}