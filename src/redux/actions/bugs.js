export function addBug(datas){
    return {
        type:"ADD_BUG",
        data:datas,
    }
}
export function getBug(datas){
    return {
        type:"GET_BUG",
        data:datas,
    }
}
export function clearBug(){
    return{
        type:"CLEAR_BUG",
    }
}
export function setChart(chartData){
    return {
        type:'SET_BUG_CHART',
        chart:chartData
    }
}