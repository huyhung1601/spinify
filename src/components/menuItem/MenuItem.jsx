import React, { useRef } from 'react'
import './styles.scss'
const MenuItem = ({item}) => {
    const rippleRef = useRef()
    const toggleBtn = (e)=>{
        let x = e.clientX - rippleRef.current.offsetLeft;
        let y = e.clientY - rippleRef.current.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        rippleRef.current.appendChild(ripples)

        setTimeout(()=>{
            ripples.remove()
        },1000)
    }
    return (
        <div ref={rippleRef} className='menuItem' onClick={toggleBtn}>
            <img className='menuItemLogo' src={`./assets/${item}.png`} alt="" />
        </div>
    )
}

export default MenuItem
