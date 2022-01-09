import ITAxios from "../../utils/AAxios";
import axios from 'axios'
import jwt_decode from "jwt-decode"
//AuthReducer
export const userLogin = (email,password) => async (dispatch,getState) => { 
        // const response = await ITAxios.post('token',
        // {   
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     params : {
        //         email : email,
        //         password : password,
        //     }
            
        // })
        let response = await fetch('http://127.0.0.1:8000/api/token',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':email,'password':password})
        })
        let data = await response.json()
        dispatch({ type: 'USER_LOGIN', payload: data })
        dispatch(getUserAction())
        
}

export const refreshTokenAction = () => async (dispatch,getState) => {

    let response = await fetch('http://127.0.0.1:8000/api/token/refresh',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':getState().auth.state.refresh})
    })
    let data = await response.json()

    dispatch({type: 'TOKEN_REFRESH', payload : data})
}

export const getUserAction = () => async (dispatch,getState) => {
    const access = jwt_decode(getState().auth.state.access)
    //const access = jwt_decode(state.access)
    let response = await fetch(`http://127.0.0.1:8000/api/user/${access.user_id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    })
    let data = await response.json()
    dispatch({type: 'GET_USER_DATA', payload : data})
}

export const createUserAction = () => async (dispatch,getState) =>{
    
}
