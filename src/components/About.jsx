import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

  return (
    <div id="about" className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
        <p className='font-general text-base uppercase'>
                Welcome to SECRET
            </p>

            <AnimatedTitle 
            title="This is a very secret text <br/> that cannot be disclosed"
            containerClass="mt-5 !text-black text-center"
            />

            <div className='about-subtext'>
                <p>SECRET SECRET SECRET SECRET SECRET SECRET SECRET</p>
                <p>some more SECRET SECRET SECRET SECRET SECRET SECRET SECRET</p>
            </div>
        </div>

        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                src="img/about.png" 
                alt="Background" 
                className='absolute left-0 top-0 size-full object-cover' 
                />
            </div>
        </div>
    </div>
  )
}

export default About