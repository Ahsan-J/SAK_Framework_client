var initialState={

};
export default function(state = initialState,action){
    switch (action.type){
        case "ALL_PROJECTS":
            state.projects = action.projects;
            
            return state = {
                
            };
        
        default:
            return state;
    }
}