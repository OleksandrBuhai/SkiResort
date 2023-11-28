import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sliderStore from '@/assets/dataStore/sliderStore';
import { nextSlide, prevSlide, dotSlide } from '@/reduxStore/sliderSlice';
import './Slider.css'



export const Slider = () => {
  const sliderIndex = useSelector((state) => state.sliderReducer.value);
  const dispatch = useDispatch();

  const nextSlideHandler = () => dispatch(nextSlide({ id: sliderIndex + 1 }));
  const prevSlideHandler = () => dispatch(prevSlide({ id: sliderIndex - 1 }));



  return (
    <div className='container'>
      <div className='imgContainer'>
        {sliderStore.map((el) => (
          <div
            key={el.id}
            style={{
              opacity: parseInt(el.id) === sliderIndex ? 1 : 0,
              transition: 'opacity 700ms ease-in-out',
              transform: `scale(${parseInt(el.id) === sliderIndex ? 1 : 0.99})`,
              transition: 'transform 700ms ease-in-out',
            }}
          >
            {parseInt(el.id) === sliderIndex && (
              <div>
                <img
                 className='img'
                  
                  src={el.img}
                  alt={`slide-${el.id}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div 
      className='dotContainer'
     >
        {sliderStore.map((dot, index) => (
          <div
            key={dot.id}
            style={{
              display: 'inline-block',
            }}
          >
            <div
            className='dot'
              style={{backgroundColor: index === sliderIndex ? 'red' : 'white'}}
              onClick={() => dispatch(dotSlide({ id: index }))}
            ></div>
          </div>
        ))}
      </div>
      <div style={{ alignItems: 'center', alignContent: 'center' }}>
        <button 
      
        style={{ position: 'absolute', top: '50%', right: '1rem', width: '1rem', background: 'none', border: 'none' }} onClick={nextSlideHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1rem', height: '1rem', color: 'white' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button style={{ position: 'absolute', top: '50%', left: '1rem', width: '1rem', background: 'none', border: 'none' }} onClick={prevSlideHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '1rem', height: '1rem', color: 'white' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
