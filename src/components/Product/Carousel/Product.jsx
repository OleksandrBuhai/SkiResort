import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import dataStore from '@/assets/servisec/dataStore/dataStore'
import React from 'react';
import { Link } from "react-router-dom";


const Carousel = () => {
 

    return (
        <div >
            
            <HorizontalScrollCarousel />
         
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-155%"]);

    const sectionStyle = {
        position: 'relative',
        height: '300vh',
        backgroundColor: '#your-neutral-900-color',
    };

    const stickyContainerStyle = {
        position: 'sticky',
        top: '0',
        height: '100vh',
        display:'flex',
        alignItems:'center',
        overflow: 'hidden',
    };

    return (
        <section ref={targetRef} style={sectionStyle}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden" style={stickyContainerStyle}>
                <motion.div style={{ x }} >
                    <div style={{ display: 'flex', width: '500rem', gap: '2rem' }}>
                        {dataStore.map((card) => {
                            return <Card card={card} key={card.id} />;
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {


    const cardContainerStyle = {
        position: 'relative',
        height: '450px',
        width: '450px',

        overflow: 'hidden',

    };

    const backgroundImageStyle = {
        backgroundImage: `url(${card.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        transition: 'transform 300ms',

    };

    const contentContainerStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        display: 'grid',
        placeContent: 'center',
        alignItems: 'end',
        alignContent: 'stretch',

    };

    const titleStyle = {

        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexDirection: 'column',
        fontWeight: 900,
        color: '#fff',
        backdropFilter: 'blur(16px)',
    };

    return (
        <div key={card.id} style={cardContainerStyle} className="group">
            <div style={backgroundImageStyle} className="group-hover:scale-110"></div>
            <div style={contentContainerStyle}>
                <p style={titleStyle}>
                    {card.description}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <button style={{
                            padding: '8px 24px',
                            fontWeight: 'medium',
                            backgroundColor: 'blue',
                            color: 'white',
                            width: 'fit-content',
                            transition: 'all 300ms',
                            boxShadow: '3px 3px 0px black',
                            '&:hover': {
                                boxShadow: 'none',
                                transform: 'translate(3px, 3px)',
                            },
                        }}>
                            <Link to={'/description'} state={{
                                img: card.img,
                                description:card.description, 
                                about:card.about,
                                price:card.price}} >
                                Learn more
                            </Link>
                        </button>
                    </div>
                </p>
            </div>
        </div>
    );
};

export default Carousel;

