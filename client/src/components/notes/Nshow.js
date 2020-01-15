import React from 'react'
import {connect} from 'react-redux'
import  _ from 'lodash'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

 function NoteShow(props){
        console.log(props.note)
        const id= props.match.params.id
        // const {name,email,mobile} = this.props.customer
        return(
            <div className="container">
              <br/>
             
                {
                    !_.isEmpty(props.note) &&(
                      <div>
                        <h2 className="text-light bg-dark p-2 mb-3" style={{textAlign:"center"}}>Show Note- {props.note.title}</h2>
            <Row>
            <Col sm="4">
                <br/>
              <Card body inverse style={{ backgroundColor: '#155', borderColor: '#333' }} >
                <CardTitle>Title Of The Note - {props.note.title}</CardTitle>
                <CardText>Body Of The Note - {props.note.body}</CardText>
                <CardText>Category Belong To - {props.note.category.name}</CardText>
                <Link to = "/notes" className="link"> Go To Notes </Link>
                <Link to = {`/notes/edit/${id}`} className="btn btn-success"> Edit</Link>  
              </Card>
            </Col>
          </Row>
          </div>
            )
                }  
             </div>
        )
}

const mapStateToProps = (state, props) => {
    return {
        note: state.notes.find(note => note._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(NoteShow)