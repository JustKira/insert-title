const authReducer  = (state,action) => {
    switch(action.type){
        case 'LOGIN':
            return state.payload
        case 'LOGOUT':
            return state
    }
}

export default authReducer