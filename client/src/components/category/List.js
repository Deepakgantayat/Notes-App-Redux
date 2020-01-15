import React from 'react'
import CategoryForm from './Form'
import {connect} from 'react-redux'
import {startAddCategories} from '../actions/categories'
import {startRemoveCategory} from '../actions/categories'
import swal from 'sweetalert'
// import Swal from 'sweetalert2/src/sweetalert2.js'

function CategoryList(props){
    const handleSubmit = (formData) => {
        props.dispatch(startAddCategories(formData, props))
    }   
    const handleRemove = (id) =>{
        props.dispatch(startRemoveCategory(id))
     }     
            return(
                <div className="row">
                    
                    <div className="col-md-6">
                    <br/>
                    <h2  style={{textAlign:"center"}}>Listing All Categories</h2>
                    <br/>
                    <table className="table table-striped ">
                   <thead className="table-dark">
                       <tr>
                           <th>Name</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           props.categories.map((category) =>{
                              return (<tr key ={category._id}>
                                   <td>{category.name}</td>
                                   <td>
                                   <button className="btn btn-danger"onClick= {() =>{ 
                                       const confirmRemove = 
                                       swal({
                                        title: "Are you sure you want to Delete?",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                          swal("Successfully Deleted", {
                                            icon: "success",
                                          });               
                                          handleRemove(category._id)
                                        } 
                                      })
                                   }}>remove</button>
                                   </td>
                               </tr>
                              )
                           })
                       }
                   </tbody>

               </table>
             </div>                 
                 <div className="col-md-6 ">
                 <CategoryForm handleSubmit = {handleSubmit} classes="table group"/> 
                     </div> 
                      
            

                    
                </div>
            )
        }

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(CategoryList)