import axios from 'axios'

export const login = (e) => {
    console.log('[LOGIN REDUX]')
    return async function (dispatch,getState) {
        
        let response = await fetch('http://127.0.0.1:8000/api/token',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':e.target.email.value,'password':e.target.password.value})
        })
        let data = await response.json()

        console.log(data)
        dispatch({
            type:'LOGIN',
            payload:data
        })
    }
}
export const logout = () => {
    return{
        type : 'LOGOUT'
        
    }
}