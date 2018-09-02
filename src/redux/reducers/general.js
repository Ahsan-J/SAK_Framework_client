var initialUser={
    activeProjectId:'',
    projects:[]
};
export default function(state = initialUser,action){
    switch (action.type){
        case "SET_ACTIVE_PROJECT":
            return state = {
                ...state,
                activeProjectId:action.id,
            };
        case "SET_PROJECTS":
            return state = {
                ...state,
                projects:action.projects
            }
        default:
            return state;
    }
}