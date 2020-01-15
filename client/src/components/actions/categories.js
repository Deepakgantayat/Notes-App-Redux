import axios from 'axios'

export const setCategories = (categories) => {
    return {
        type: 'SET_CATEGORIES',
        payload: categories
    }
}

export const startSetCategories = () => {
    return (dispatch) => {
        axios.get('http://localhost:3025/categories', {
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const categories = response.data
            console.log(response.data)
            dispatch(setCategories(categories))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const addCategory = (category) =>{
    return {
        type : 'ADD_CATEGORY',
        payload: category
    }
}

export const startAddCategories = (formData, props) => {
    return (dispatch) => {
        axios.post('http://localhost:3025/categories', formData,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const category = response.data
                dispatch(addCategory(category))
                // props.history.push(`/customers/${customer._id}`)

            }
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

export const removeCategory = (id) => {
    return {
        type: 'REMOVE_CATEGORY',
        payload : id
    }
}

export const startRemoveCategory = (id) => {
    return (dispatch) => {
        //  dispatch(removeCustomer(id))//remove it before confirmation from server may cause propblem
        axios.delete(`http://localhost:3025/categories/${id}`, {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            dispatch(removeCategory(response.data._id))
        })
    }    
}