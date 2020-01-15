import React from 'react'
import NoteForm from './Nform'
import {connect} from 'react-redux'
import {startAddNote} from '../actions/notes'


function NoteNew(props){
    
   const handleSubmit = (formData) => {
        props.dispatch(startAddNote(formData, props))
    }
        return(
            <div className="row">
                 <div className="col-md-6">
                    <br/>
                    <br/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81nia28xsOL._SX425_.jpg"  className="rounded mx-auto d-block"  alt="Responsive"></img>
                </div>
                <div className="col-md-6">
                    <br/>
                <h2>Create New Note</h2>
                <NoteForm handleSubmit = {handleSubmit}/>
                </div>
                
            </div>
        )
}

export default connect()(NoteNew)