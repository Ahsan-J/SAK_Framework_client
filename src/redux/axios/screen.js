import axios from 'axios';
import {Base_Url} from '../../config.js'
import {addScreen as add,getScreen as get,updateScreen as update} from '../actions/screen.js'

export function addScreen (screens){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/screen/add',
            data:screens,
        }).then(function(response){
            dispatch(add(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function getScreen(param_data){
    return dispatch=>{
        axios({
            method:'GET',
            url:Base_Url+'/app/screen',
            params:param_data,
        }).then(function(response){
            dispatch(get(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function updateScreen(param_data){
    return dispatch=>{
        axios({
            method:'PUT',
            url:Base_Url+'/screen/update',
            data:param_data,
        }).then(function(response){
            dispatch(update(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}