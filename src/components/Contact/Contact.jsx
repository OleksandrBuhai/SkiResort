
import React, { useEffect, useRef } from 'react'
import './Contact.css'
import AOS from "aos";
import 'aos/dist/aos.css';


export default function Contact() {

    useEffect(()=>{AOS.init},[])


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        
        const formData = new FormData(form.current);
        let isFormValid = true;

        formData.forEach((value, key) => {
            if (!value.trim()) {
                
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            window.alert('Please fill in all fields before submitting.');
            return;
        }

        
        emailjs
            .sendForm(
                'service_h44wvlb',
                'template_von5hp4',
                form.current,
                'Hc34q67_kNB4O02CX'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    window.alert('Message sent');
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id='Contacts'>
            <h2 style={{ textAlign: 'center', margin: 'auto', fontSize: '3rem' }}>Contact Us</h2>
            <div className='contactsBlock' id="Contacts">
             
                <div className='contactContainer'>
                    <div className='contactTextContainer'
                    data-aos="flip-left">
                        <span>Let's get in touch</span>
                        <span>example@gmail.com</span>
                    
                    </div>
                    <div className='formContainer'
                    data-aos="flip-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <div>
                                    <p>
                                        <input
                                            className='input'
                                            type="text"
                                            name="user_name"
                                            placeholder="Name"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <input
                                            className='input'
                                            type="email"
                                            name="user_email"
                                            placeholder="Email address"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <input
                                            className='input'
                                            placeholder="Subject"
                                            name="subject"
                                        />
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        <textarea
                                            name="message"
                                            className='textArea'
                                            placeholder="Enter your message"
                                        />
                                    </p>
                                </div>
                                <div className='centerButton'>
                                    <p>
                                        <button
                                            type="submit"
                                            className='button'
                                        >
                                            Submit
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
