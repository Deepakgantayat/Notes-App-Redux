import axios from 'axios'
import {setNotes} from './notes'
import {setCategories} from './categories'
import swal from 'sweetalert'

export const setUser = (user = {}) => {
    return {
        type:'SET_USER',
        payload: user
    }
}

export const startResgisterUser =(formData, props)=>{
    return (dispatch) => {
        axios.post('http://localhost:3025/users/register', formData)
            .then((response) => {
                const data =response.data
                if(data.hasOwnProperty('errors')){
                    console.log(response)
                    swal(data.message)
                }
                else{
                    swal('successfully registered')
                    //redirect user to another page automatically
                    dispatch(setUser())
                   props.history.push('/users/login')
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startLoginUser = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3025/users/login', formData)
            .then((response) => {
                console.log(response.data)
                if(!response.data.token){
                    swal(response.data)
                }
                else{
                    console.log(response.data)
                    const token = response.data.token
                    localStorage.setItem('authToken', token)
                    swal('Succssfully logged in')

                    Promise.all([axios.get('http://localhost:3025/users/account',{
                        header: {
                            'x-auth' : token
                        }
                    }), axios.get('http://localhost:3025/notes', {
                        headers: {
                            'x-auth' : token
                        }
                    }),axios.get('http://localhost:3025/categories', {
                        headers: {
                            'x-auth' : token
                        }
                    })])

                    .then(values => {
                        const [userResponse, NotesResponse, CategoriesResponse] = values
                        dispatch(setUser(userResponse.data))
                        dispatch(setNotes(NotesResponse.data))
                        dispatch(setCategories(CategoriesResponse.data))
                        props.history.push('/')
                    })
                    // this.props.history.push('/')
                    // window.location.reload()

                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startGetUser = () =>{
    return(dispatch) =>{
        axios.get('http://localhost:3025/users/account',{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const startLogoutUser = () => {
    return (dispatch) => {
        axios.delete('http://localhost:3025/users/logout', {
            headers: {
              'x-auth': localStorage.getItem('authToken')
            }
          })
          .then(response =>{
            if(response.data.hasOwnProperty('notice')){
              localStorage.removeItem('authToken')
              dispatch(setUser({}))
              window.location.href = '/users/login'
            }
          })
    }
}