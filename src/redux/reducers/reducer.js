var initialUser={
    counter:0
};
export default function(state = initialUser,action){
    switch (action.type){
        case "test":
            return state = {
                ...state,
                counter:state.counter+1
            };
        default:
            return state;
    }
}