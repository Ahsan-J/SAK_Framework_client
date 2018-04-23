export function setAllBugs(data){
    return {
        type:"SET_ALL_BUG",
        data:data,
    }
}
export function addBug(bug){
    return {
        type:"ADD_BUG",
        data:bug,
    }
}
export function setChart(chartData){
    return {
        type:'SET_BUG_CHART',
        chart:chartData
    }
}