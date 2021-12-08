import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <ul className='header-menu'>
                <li><NavLink to='/reactportfolio'>Home</NavLink></li> 
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contacts'>Contacts</NavLink></li>
            </ul>
        </div>
    )
}
