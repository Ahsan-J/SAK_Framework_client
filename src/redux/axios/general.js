import axios from 'axios';
import {Base_Url} from '../../config.js';
import {setProjectsInfo} from '../actions/general.js' 

export function getProjectDetails(userId){
    return dispatch => {
        axios({
            
            method:'GET',
            url:Base_Url+'/projects',
            params:{userid:userId}
    
        }).then(function(response){
            console.log(response.data);
            dispatch(setProjectsInfo(response.data))
            
        }).catch(function(response){
            console.log(response);
        })
    }
}