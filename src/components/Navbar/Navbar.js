import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
  /* state to manage state of menu icon  */
  state = { clicked: false }
  
  /* function to handle the clicks on menu icon   */
  handleClick = ()=> {
    this.setState({ clicked: !this.state.clicked })
  }

  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
          {/* condition to change icon if menu icon i clicked */}
        </div>
        {/* condition to change nav menu  styles when clicked   */}
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {/* function to loop through and display menu items   */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}> 
                  {item.title}
                </a>
              </li>
            )
          })}    
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar