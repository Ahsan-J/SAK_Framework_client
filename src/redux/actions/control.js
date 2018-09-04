export function addControl(datas){
    return {
        type:"ADD_CONTROL",
        data:datas,
    }
}
export function getControl(datas){
    return {
        type:"GET_CONTROL",
        data:datas,
    }
}
export function updateControl(datas){
    return {
        type:"UPDATE_CONTROL",
        data:datas,
    }
}
export function clearControl(){
    return{
        type:"CLEAR_CONTROL",
    }
}