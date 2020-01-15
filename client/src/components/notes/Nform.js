import React from 'react'
import {connect} from 'react-redux'

class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title ? props.title : '',
            body: props.body ? props.body: '',
            categoryId:props.body?props.body:'',
        }
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData={
            title: this.state.title,
            body: this.state.body,
            category: this.state.categoryId
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
           
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label> Title </label>
                    <input type="text" value={this.state.title} onChange={this.handleChange} name="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Body</label>
                    <input type="text" value={this.state.body} onChange={this.handleChange} name="body" className="form-control"/>
                    </div>
                    <div className="form-group">
                    <label>Category</label>
                    
                    <select name="categoryId" onChange={this.handleChange}>
                        <option >select</option>
                        {
                            this.props.categories.map(category=>{
                                return <option key={category._id} value={category._id}>{category.name}</option>
                            })
                        }
                       </select>
                    </div>
                    <input type ="submit" className="btn btn-success btn-lg btn-block"/>
                </form>
            </div>            
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
      categories: state.categories
    }
  }
  export default connect(mapStateToProps)(NoteForm)