var initialUser={
    user:{
        id:'',
        name:'',
        type:'',
        auth:false,
    }
};
export default function(state = initialUser,action){
    switch (action.type){
        case "LOGIN_SUCCESS":
            return state = {
                ...state,
                user:{
                    id:action.data.id,
                    name:action.data.user,
                    type:action.data.type,
                    auth:action.data.auth
                }
            };
        default:
            return state;
    }
}