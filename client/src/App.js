import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import swal from 'sweetalert'

import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'

import CategoryList from './components/category/List'

import NoteList from './components/notes/Nlist'
import NoteShow from './components/notes/Nshow'
import NoteNew from './components/notes/Nnew'
import NoteEdit from './components/notes/Nedit'

import {startLogoutUser} from './components/actions/user'

function App(props) {
  const handleLogout = () => {
    swal({
      title: "Are you sure you want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Successfully Logged out", {
          icon: "success",
        });               
        props.dispatch(startLogoutUser())
      } 
    })
   
   }

  return (
    <BrowserRouter>
    
    <div className = "container-fluid">
    <nav className="navbar"style={{ backgroundColor: '#999' }} >
    <a className="navbar-brand "  style={{textAlign:"end", color:"black"}}>NOTES APP</a>
      <ul className="nav justify-content-end">
  
        <li className="nav-item active " ><Link to = "/" className="nav-link"  style={{textAlign:"end", color:"black"}}>Home</Link></li>
        {
          !_.isEmpty(props.user) ?(
            <div className="nav justify-content-end">
              <li className="nav-item"  ><Link to = "/categories" className="nav-link active" style={{color:"black"}} >Category</Link></li>
              <li className="nav-item"><Link to = "/notes" className="nav-link"  style={{ color:"black"}}>Notes</Link></li>
              <li className="nav-item"><Link to = "/users/account" className="nav-link"  style={{color:"black"}}>Account</Link></li>
             <li className="nav-item active" ><Link to ="#" className="nav-link" onClick= {handleLogout}  style={{color:"black"}}>Logout</Link></li>
          
            </div>
          ): (
            <div className="nav justify-content-end">
              <li className="nav-item"><Link to = "/users/register" className="nav-link" style={{ color:"black"}}>Register</Link></li>
              <li className="nav-item"><Link to = "/users/login" className="nav-link" style={{color:"black"}}>Login</Link></li>
            </div>
             )
          }
        
      </ul>
     </nav>


      <Switch>
      <Route path ="/" component = {Home} exact = {true}/>
      <Route path = "/users/register" component = {Register}/>
      <Route path = "/users/login" component = {Login}/>
      <Route path = "/users/account" component = {Account}/>
    

      <Route path = "/categories" component = {CategoryList}/>

      <Route path = "/notes" component = {NoteList} exact={true}/>
      <Route path = "/notes/new" component = {NoteNew}/>
      <Route path = "/notes/edit/:id" component = {NoteEdit}/>
      <Route path = "/notes/:id" component = {NoteShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state,props) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(App)
