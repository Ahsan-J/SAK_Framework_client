export function addScreen(datas){
    return {
        type:"ADD_SCREEN",
        data:datas,
    }
}
export function getScreen(datas){
    return {
        type:"GET_SCREEN",
        data:datas,
    }
}
export function updateScreen(datas){
    return {
        type:"UPDATE_SCREEN",
        data:datas,
    }
}
export function clearScreen(){
    return{
        type:"CLEAR_SCREEN",
    }
}