
var initialUser={
    controls:[]
};
export default function(state = initialUser,action){
    switch (action.type){
        case "ADD_CONTROL":
        state.controls.push(action.data);
            return state = {
                ...state,
                controls:[...state.controls]
            };
        case "GET_CONTROL":
        state.controls = action.data;
            return state = {
                ...state,
                controls:[...state.controls]
            }
        case "UPDATE_CONTROL":
            state.controls=state.controls.filter(function(Module){
                return Module.id!=action.data.id
            })
            state.controls.push(action.data)
            return state = {
                ...state,
                controls:[...state.controls],
            }
        case "CLEAR_CONTROL":
            return state = {
                ...state,
                controls:[],
            }
        default:
            return state;
    }
}