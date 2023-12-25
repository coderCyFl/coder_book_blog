import React,{useState} from "react";
import {Link} from 'react-router-dom';
import { Avatar} from 'antd';

const anyaIcon = require('../../images/anya_icon.jpeg');


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
        title: 'About Me',
        path:'/aboutme'
    },
    {
        title: 'Our Service',
        path:'/login'
    }
]


export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false);

    return(
    <nav className="web-navigation" role="navigation">
        <span className="menu-title">coderCy ^_^</span>
       <div className={`menu-content-container ${menuActive && 'active'}`}>  
        <ul>
            { navURL.map((link,index) => (
                <li key={index}>
                  <Link to={link.path}>{link.title}</Link>
            </li>
           ))}
        </ul> 
        <span className="menu-avatar-container">
            <Avatar className="anya-icon" src={anyaIcon} size={36}/>
            <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
        </div>
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    </nav>
    )
}