import React, { useEffect, useState } from 'react';
import Bars from '@/assets/bars/bars.png';
import { Link, scroller } from 'react-scroll'
import './Header.css';

export default function Header() {
    const [menu, setMenu] = useState(false);
    const [activeId, setActiveId] = useState()

    const values = [
        { id: 1, text: 'Main' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Team' },
        { id: 4, text: 'Products' },
        { id: 5, text: 'Events' },
        { id: 6, text: 'Contacts' },
    ]


    useEffect(() => {
        const handleScroll = () => {
            const elements = ["Main", "About", "Team", "Products", "Events", "Contacts"];
            const offset = window.innerHeight * 0.4;

            for (let i = elements.length - 1; i >= 0; i--) {
                const element = elements[i];
                const el = document.getElementById(element);
                if (el && el.getBoundingClientRect().top <= offset) {
                    setActiveId(element);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='header'>
            <div
                style={{
                    width: '5rem',
                    zIndex: '1000',
                    background: menu ? 'black' : 'blue',
                    padding: "0.5rem",
                    borderRadius: "5px",
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    cursor: "pointer",
                }}
                onClick={() => setMenu(!menu)}
            >
                <img
                    src={Bars} alt={""} />
            </div>
            <ul className='navContainer'>
                {values.map((el, index) => (
                    menu &&
                    (<li key={index} className='navMenu'>
                        <Link to={el.text} smooth={true}
                            onClick={() => {
                                scroller.scrollTo(el.text, {
                                    smooth: true,
                                });
                            }}
                            className={activeId === el.text ? 'active:' : ''}
                        >
                            {el.text}
                        </Link>
                    </li>)
                ))}
            </ul>
        </div>
    );
}
