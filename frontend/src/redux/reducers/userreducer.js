const state = {
    auth: null,
}

const usereducer  = (state = state,action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, auth : action.payload}
        case 'LOGOUT':
            return state
    }
}

export default usereducer