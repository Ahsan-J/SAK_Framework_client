var initialState={
    projects:[]
};
export default function(state = initialState,action){
    switch (action.type){
        case "ALL_PROJECTS":
            state.projects = action.projects;
            
            return state = {
                
            };

        case "GET_ALL_PROJECTS":
            return state = {
                ...state,
                projects:[...action.data],
            };

        case "ADD_PROJECT":
        state.projects.push(action.data);
            return state = {
                ...state,
                projects: [...state.projects]
            }
        default:
            return state;
    }
}