import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTitle'
import gsap from 'gsap';
import Button from './Button';

const Story = () => {

    const frameRef = useRef('null');

    const handleMouseLeave = () => {

        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0, 
            rotateY: 0,
            ease: 'power1.inOut'
        })
    }
    
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20;
        const rotateY = ((x - centerX) / centerX) * 20;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            perspective: 500,
            ease: 'power1.inOut'
        })
    }

  return (
    <section 
    id="story" 
    className='min-h-dvh w-screen bg-[#131020] text-teal-50'
    >
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-Roboto-Bold font-semibold text-sm uppercase md:text-[16px]'>
                Secret paragraph very epic
            </p>

            <div className='relative size-full'>
                <AnimatedTitle 
                title="The story of a <br /> secret secret"
                sectionId="#story"
                containerClass="mt-6 pointer-events-none mix-blend-difference relative z-10"
                />

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img 
                            ref={frameRef}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseLeave}
                            onMouseEnter={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                            src="/img/entrance.png" 
                            alt="entrance"
                            className='object-contain'                            
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-3 max-w-sm text-center text-lg font-base font-Roboto-Bold text-blue-50 md:text-start'>
                        This is a very big secret paragraph, secret secret secret secret secret secret secret secret secret secret
                    </p>

                    <Button
                        id="realm-button"
                        title="Secret button idk"
                        containerClass="mt-5" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story