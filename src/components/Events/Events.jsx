
import AOS from "aos";
import 'aos/dist/aos.css';

import React, { useEffect } from 'react'
import eventImg from '@/assets/event/eventImg.png'
import './Events.css'
import { Link } from "react-router-dom";

export default function Events() {

    useEffect(() => { AOS.init }, [])

    const state = [{
        date: ' WEDNESDAY, NOVEMBER 29, 2023',
        name: 'WHISTLER FILM FESTIVAL',
        description: ' Coolest Film Fest celebrates 23 years in 2023 with events to connect audiences, filmmakers, and industry.',
        img: eventImg,
        price: '200$'
    }, {
        date: ' WEDNESDAY, NOVEMBER 30, 2023',
        name: 'WHISTLER FILM FESTIVAL',
        description: ' Coolest Film Fest celebrates 23 years in 2023 with events to connect audiences, filmmakers, and industry.',
        img: eventImg,
        price: '200$'
    }, {
        date: ' WEDNESDAY, DECEMBER 2, 2023',
        name: 'WHISTLER FILM FESTIVAL',
        description: ' Coolest Film Fest celebrates 23 years in 2023 with events to connect audiences, filmmakers, and industry.',
        img: eventImg,
        price: '200$'
    }, {
        date: ' WEDNESDAY, DECEMBER 5, 2023',
        name: 'WHISTLER FILM FESTIVAL',
        description: ' Coolest Film Fest celebrates 23 years in 2023 with events to connect audiences, filmmakers, and industry.',
        img: eventImg,
        price: '200$'
    }]


    return (
        <div id="Events">
            <h2 style={{ textAlign: 'center', margin: 'auto', fontSize: '3rem' }}>Events</h2>
            
                {state.map((el,index) => {
                    return (
                        <div className='eventContainer'
                            data-aos="flip-left"
                            id={index} >

                            <div className='eventTextContainer'>

                                <div className='eventText'>
                                    <h4>{el.name}</h4>
                                    <span>{el.description}</span>
                                    <p className="">
                                        <Link
                                            className="custom-link"
                                            to={'/description'} state={{
                                                img: el.img,
                                                description: el.description,
                                                about: el.about,
                                                price: el.price
                                            }}
                                        >
                                            Learn more..
                                        </Link>
                                    </p>
                                </div>
                                <img src={el.img} />
                            </div>
                        </div>
                    )
                })}
           
        </div>
    )
}
