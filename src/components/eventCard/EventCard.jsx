import { ListItem } from '@material-ui/core'
import React from 'react'
import './styles.scss'
const EventCard = ({item}) => {
    return (
        <div className='eventCard'>
            <div className="avatar">
                <img src="./assets/avatar.png" alt="" className="avatarImg" />
            </div>
            <div className="eventContent">
                <p>{item.name} just got a deal of</p>
                <span>07/07/2021</span>
            </div>
            <div className="dealNumber">
                <h3>${item.sales}</h3>
            </div>
        </div>
    )
}

export default EventCard
