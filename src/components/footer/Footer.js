import React, { Component } from 'react'
import '../Css/Footer.css' 

class Footer extends Component {
   render(){
      return(
         <footer className='footer'>
            <a href='https://www.linkedin.com/in/tapiwa-divine-chipatiko-256028160/'>
               <i class="fab fa-linkedin"></i>
            </a>
            <a href='https://github.com/TapiwaDivine'>
            <i class="fab fa-github"></i>
            </a>
            <muted className='copyright'>©Copyright: 2021</muted>
         </footer>
      )
   }
}

export default Footer