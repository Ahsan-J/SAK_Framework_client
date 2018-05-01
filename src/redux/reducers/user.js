var initialUser={
    user:{
        id:'Hyna0pHpz',
        name:'Dummy',
        user:'Dummy',
        role:'Dummy',
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
                    role:action.data.role,
                    auth:action.data.auth
                }
            };
        default:
            return state;
    }
}