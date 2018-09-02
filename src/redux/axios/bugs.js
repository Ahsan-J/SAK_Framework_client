import axios from 'axios';
import {Base_Url} from '../../config.js'
import {addBug as add,getBug as get,setChart} from '../actions/bugs.js'

export function addBug (bug){
    return dispatch=>{        
        axios({
            method:'POST',
            url:Base_Url+'/bugs/add',
            data:bug,
        }).then(function(response){
            dispatch(add(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}

export function getBug(param_data){
    return dispatch=>{
        axios({
            method:'GET',
            url:Base_Url+'/control/bug',
            params:param_data,
        }).then(function(response){
            dispatch(get(response.data))
        }).catch(function(response){
            console.log(response);
        })
    }
}

export function getChartData(){
    return dispatch=>{
        axios({
            method:'GET',
            url:Base_Url+'/bug/chart_data'
        }).then(function(response){
            dispatch(setChart(response.data))
            console.log(response);
        }).catch(function(response){

        })
    }
}