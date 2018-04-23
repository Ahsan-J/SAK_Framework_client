var initialUser={
    bugs:[],
    chart:{},
};
export default function(state = initialUser,action){
    switch (action.type){
        case "SET_ALL_BUG":
            return state = {
                ...state,
                bugs:action.data
            };
        case "ADD_BUG":
        state.bugs.push(action.data)
            return state = {
                ...state,
                bugs:[...state.bugs]
            }
        case "SET_BUG_CHART":
        return state = {
            ...state,
            chart:{...action.chart},
        }
        default:
            return state;
    }
}