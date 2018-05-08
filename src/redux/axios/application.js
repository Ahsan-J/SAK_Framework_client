import axios from 'axios';
import {Base_Url} from '../../config.js'
import { addProject, getProjects } from '../actions/application.js';

export function addApp (newApp){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/app/add',
            data:newApp,
        }).then(function(response){
            dispatch(addProject(response.data));
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function getApps(){
    return dispatch=>{
        axios({
            method:'GET',
            url:Base_Url+'/app',
        }).then(function(response){
            dispatch(getProjects(response.data))
        }).catch(function(response){
            console.log('/app in controller' , response);
        })
    }
}