import React from 'react'
import Button from './Button'

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
)

const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-[#131020] text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox
                        src="/img/contact-1.png"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.png"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>

                <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                    <ImageClipBox
                        src="/img/steve.png"
                        clipClass="absolute md:scale-125"
                    />
                    <ImageClipBox
                        src="/img/steve1.png"
                        clipClass="sword-man-clip-path md:scale-125"
                    />
                </div>

                <div className='mt-14 flex flex-col items-center text-center'>
                    <p className='font-Roboto-Light font-semibold text-[14px] uppercase'>
                        Gib secret
                    </p>

                    <p className='special-font mt-10 w-full font-Helvetica-Bold uppercase text-5xl leading-[0.9] md:text-[6rem] mix-blend-difference'>
                        Hi im a secret <br /> and i dunno what <br /> to say so,<br /> secret! <br /> WOW <br /> Minecraft is fun <br /> fml
                    </p>

                    <Button 
                    title="contact pls"
                    containerClass="mt-10 mb-14 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact