import MenuItem  from '../menuItem/MenuItem'
import React from 'react'
import './styles.scss'
const menu= ['home', 'meeting','analysis']

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                <img src="./assets/logo.png" alt="" />
            </div>
            <div className="sidebarMenu">
                {menu.map((x,i)=>(
                    <MenuItem key={i} item={x}  />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
