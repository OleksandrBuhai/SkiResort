
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './About.css';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from "../Slider/Slider";
import { nextSlide, prevSlide } from "@/reduxStore/sliderSlice";




export default function About() {

    useEffect(() => {
        AOS.init();
    }, [])


    const sliderIndex = useSelector((state) => state.sliderReducer.value)
    const dispatch = useDispatch()

    const nextSlideHandler = () => dispatch(nextSlide({ id: sliderIndex + 1 }))
    const prevSlideHandler = () => dispatch(prevSlide({ id: sliderIndex - 1 }))

    return (
        <div className='background' id="About">
            <div className='contentContainer'>
                <div className='imgContainer'
                  data-aos="fade-right"
                >
                    <Slider />
                </div>
                <div className='textContainer'
                data-aos="fade-left">
                    <h2>About Us</h2>
                    Ski areas have marked paths for skiing known as runs, trails or pistes.
                    Ski areas typically have one or more chairlifts for moving skiers rapidly to the top of hills, and to interconnect the various trails. Rope tows can also be used on short slopes (usually beginner hills or bunny slopes). Larger ski areas may use gondola lifts or aerial tramways for transportation across longer distances within the ski area. Resorts post their trail map illustrating the location of lifts, trails, services and the ski area boundary, and during the ski season issue a daily snow conditions report listing open trails, operating lifts and weather status.
                    Ski areas usually have at least a basic first aid facility, and some kind of ski patrol service to ensure that injured skiers are rescued. The ski patrol is usually responsible for rule enforcement, marking hazards, closing individual runs or areas as conditions require, and removing (dismissing) dangerous participants from the area.
                    The typical ski area base includes a ticket office, ski lodge, ski school, equipment rental/repair shop, restaurant/bar, shopping, shuttle bus stop and parking.
                </div>
            </div>
        </div>
    )
}
