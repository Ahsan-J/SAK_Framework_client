var initialUser={
    testCases:[]
};
export default function(state = initialUser,action){
    switch (action.type){
        case "SET_ALL_CASES":
            return state = {
                ...state,
                cases:action.data
            };
        default:
            return state;
    }
}