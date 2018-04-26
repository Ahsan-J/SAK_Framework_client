var initialUser={
    user:{
        id:'',
        name:'Dummy',
        user:'Dummy',
        type:'Dummy',
        auth:false,
    }
};
export default function(state = initialUser,action){
    switch (action.type){
        case "LOGIN_SUCCESS":
        console.log(action.data);
            return state = {
                ...state,
                user:{
                    id:action.data.id,
                    user:action.data.user,
                    name:action.data.name,
                    type:action.data.type,
                    auth:action.data.auth
                }
            };
        default:
            return state;
    }
}