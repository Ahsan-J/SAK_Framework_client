import axios from 'axios';
import {Base_Url} from '../../config.js'
import {addModule as add,getModule as get,updateModule as update} from '../actions/module.js'

export function addModule (modules){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/module/add',
            data:modules,
        }).then(function(response){
            dispatch(add(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function getModule(param_data){
    return dispatch=>{
        axios({
            method:'GET',
            url:Base_Url+'/app/module',
            params:param_data,
        }).then(function(response){
            dispatch(get(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function updateModule(param_data){
    return dispatch=>{
        axios({
            method:'PUT',
            url:Base_Url+'/module/update',
            data:param_data,
        }).then(function(response){
            dispatch(update(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}