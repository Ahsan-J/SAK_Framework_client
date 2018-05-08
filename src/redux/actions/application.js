export function addProject (datas){
    return {
        type:"ADD_PROJECT",
        data:datas,
    }
}
export function getProjects(datas){
    return  {
        type:"GET_ALL_PROJECTS",
        data:datas,
    }
}