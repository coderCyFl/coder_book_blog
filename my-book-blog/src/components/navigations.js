import React from "react";
import {Link} from 'react-router-dom';


const navURL = [
    {
        title: 'Home',
        path:'/'
    },
    {
        title: 'Blog',
        path:'/blog'
    },
    {
        title: 'More About Me',
        path:'/more-about-me'
    },
    {
        title: 'Login',
        path:'/login'
    }
]


export default function Navigation () {
    return(
    <nav className="web-navigation" >
        <span>Coder's Book Share Blog</span>
        <ul>
            { navURL.map((link,index) => (
                <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
            </li>
           ))}
        </ul>
    </nav>)
}