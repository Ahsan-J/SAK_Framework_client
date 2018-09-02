var initialUser={
    bugs:[],
    chart:{},
};
export default function(state = initialUser,action){
    switch (action.type){
        case "ADD_BUG":
        state.bugs.push(action.data)
            return state = {
                ...state,
                bugs:[...state.bugs]
            }
        case "GET_BUG":
            return state = {
                ...state,
                bugs:[...action.data]
            };
        case "SET_BUG_CHART":
        return state = {
            ...state,
            chart:{...action.chart},
        }
        case "CLEAR_BUG":
            return state = {
                ...state,
                bugs:[],
            }
        default:
            return state;
    }
}