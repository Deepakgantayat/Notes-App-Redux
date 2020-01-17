import React from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../actions/user'

// const initialState ={
//     email: '',
//     password: '',
//     emailError:"",
//     passwordError:""
// }

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    // validate=()=>{
    //     let emailError=""
    //     let passwordError=""

       
    //     if(!this.state.email.includes('@gmail.com')){
    //         emailError= 'invalid email !!'
    //     }
    //     if(!this.state.password){
    //         passwordError="invalid password !!"
    //     }
    //     if(emailError || passwordError){
    //         this.setState({emailError,passwordError})
    //         return false
    //     }
    //     return true
    // }

    handleSubmit = (e) =>{
        e.preventDefault()
        // const isValid = this.validate()
        const formData = {
            email: this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81nia28xsOL._SX425_.jpg"  className="rounded mx-auto d-block"  alt="Responsive"></img>
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>Login</h2>
                <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                
                    <label> Email </label>
                    <input type = "text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email"className="form-control"/>
                    <div style={{color:"red"}}>{this.state.emailError}</div> 
                    </div>
                   
                    <div className="form-group">
                   
                    <label> Password </label>
                    <input type = "password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" className="form-control"/>
                    <div style={{color:"red"}}>{this.state.passwordError}</div> 
                    </div>
                    <input type ="submit" className="btn btn-success btn-lg btn-block"/>      
                </form>
                
               
                </div>
            </div>
        )
    }
}


export default connect()(Login)