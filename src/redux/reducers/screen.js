
var initialUser={
    screen:[]
};
export default function(state = initialUser,action){
    switch (action.type){
        case "ADD_SCREEN":
        state.screen.push(action.data);
            return state = {
                ...state,
                screen:[...state.screen]
            };
        case "GET_SCREEN":
        state.screen = action.data;
            return state = {
                ...state,
                screen:[...state.screen]
            }
        case "UPDATE_SCREEN":
            state.screen=state.screen.filter(function(Module){
                return Module.id!=action.data.id
            })
            state.screen.push(action.data)
            return state = {
                ...state,
                screen:[...state.screen],
            }
        case "CLEAR_SCREEN":
            return state = {
                ...state,
                screen:[],
            }
        default:
            return state;
    }
}