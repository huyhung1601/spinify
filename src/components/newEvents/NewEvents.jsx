import React from 'react'
import EventCard from '../eventCard/EventCard'
import './styles.scss'

const items=[{name: 'Henry', date: '03/10/2021', sales: '30000'},
{name: 'Ai', date: '07/07/2021', sales: '40000'},
{name: 'Tom', date: '01/10/2021', sales: '60000'},
{name: 'David', date: '03/9/2021', sales: '78000'},
{name: 'Alex', date: '03/9/2021', sales: '26000'},
]
const NewEvents = () => {
    return (
        <div className="newEvents">
            <h3>New Events</h3>
            {items.map((item,i)=>(
                <EventCard key={i} item={item} />
            ))}
            <div className="more">
                ...More
            </div>
        </div>
    )
}

export default NewEvents
