
var initialUser={
    modules:[]
};
export default function(state = initialUser,action){
    switch (action.type){
        case "ADD_MODULE":
        state.modules.push(action.data);
            return state = {
                ...state,
                modules:[...state.modules]
            };
        case "GET_MODULE":
        state.modules = action.data;
            return state = {
                ...state,
                modules:[...state.modules]
            }
        case "UPDATE_MODULE":
            state.modules=state.modules.filter(function(Module){
                return Module.id!=action.data.id
            })
            state.modules.push(action.data)
            return state = {
                ...state,
                modules:[...state.modules],
            }
        case "CLEAR_MODULE":
            return state = {
                ...state,
                modules:[],
            }
        default:
            return state;
    }
}