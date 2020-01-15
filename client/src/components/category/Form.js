import React from 'react'

export default class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
        }

        this.props.handleSubmit(formData)
        this.setState({name:""})
    }

    render(){
        return(
            <div className="row">   
                    
            <div className="col-md-12 ">
            <br/>   
            <br/>   
            <br/>   
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name"> Category</label>
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" className="form-control" />
                    </div>
                    <input type="submit" className="btn btn-success btn-lg btn-block"/>
                </form>
            </div>     
            </div>
        )
    }
}
