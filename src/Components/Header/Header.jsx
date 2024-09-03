import {  NavLink } from 'react-router-dom'
import './Header.scss'


  export const Header = () =>{
   
  
    return (
        <header className="header" id="header">
        <div className="container">
          <nav className="header__nav">
            <NavLink to="/taskList"className="header__link">TaskList</NavLink>
            <NavLink to="/addTask"className="header__link">AddTask</NavLink>
          </nav>
        </div>
       </header>
    )
}
