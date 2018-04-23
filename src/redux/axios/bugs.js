import axios from 'axios';
import {Base_Url} from '../../config.js'
import {setAllBugs,addBug,setChart} from '../actions/bugs.js'

export function getAllBugs (){
    return dispatch=>{        
        axios({
            
            method:'GET',
            url:Base_Url+'/bug',

        }).then(function(response){
            
            dispatch(setAllBugs(response.data))
        
        }).catch(function(response){
            console.log(response);
        })
    }
}
export function insertBug(bug){
    return dispatch=>{
        axios({
            method:'POST',
            url:Base_Url+'/bug/add',
            data:bug
        }).then(function(response){
            dispatch(addBug(bug));
            console.log("Data Added");
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