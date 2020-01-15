import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {startEditNote} from '../actions/notes'
import NoteForm from './Nform'


function NoteEdit(props){

   const handleSubmit = (formData) => {
        props.dispatch(startEditNote(formData, props))
    }
        return(
            <div className= "row">
                <div className="col-md-6">
                    <br/>
                    <br/>
                <img src="https://images-na.ssl-images-amazon.com/images/I/81nia28xsOL._SX425_.jpg"  className="rounded mx-auto d-block"  alt="Responsive"></img>
                </div>
                <div className="col-md-6">
                    <br/>
                {
                    !_.isEmpty(props.note) &&(
                        <div>
                             <h2> Edit Customer - {props.note.title}</h2>
                                {Object.keys(props.note).length !== 0 && <NoteForm {...props.note}
                                handleSubmit = {handleSubmit}/>}
                        </div>
                    )
                }     
                </div>
                
            </div>
        )
}

const mapStateToProps = (state, props)=> {
    return {
        note : state.notes.find(note => note._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteEdit)