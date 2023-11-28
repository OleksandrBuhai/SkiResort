
import React, { useState } from 'react'
import img1 from '@/assets/mountain1.png'
import img2 from '@/assets/mountain2.png'

import textImg from '@/assets/text.png'

import './Parralax.css'



export default function Parralax() {

    const [offset, setOffset] = useState();

    const handlerScroll = () => setOffset(window.pageYOffset)

    window.addEventListener('scroll', handlerScroll)

    return (
        <div>
            <div className='zoom'>
                <img src={img1} alt='' id='img1'

                    style={{ width: (100 + offset * 0.3) + '%' }} />
                <img src={img2} alt='' id='img2'
                    style={{ width: (100 + offset * 0.3) + '%' }} />
                <img src={textImg} alt='' id='text'
                    style={{ top: `-${100 + offset * 0.1 + '%'}` }}
                />
            </div>

        </div>
    )
}
