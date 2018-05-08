export function addModule(datas){
    return {
        type:"ADD_MODULE",
        data:datas,
    }
}
export function getModule(datas){
    return {
        type:"GET_MODULE",
        data:datas,
    }
}
export function updateModule(datas){
    return {
        type:"UPDATE_MODULE",
        data:datas,
    }
}
export function clearModule(){
    return{
        type:"CLEAR_MODULE",
    }
}