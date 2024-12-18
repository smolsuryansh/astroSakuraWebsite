import { useEffect, useRef, useState } from "react"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(1);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);
    const currentVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useEffect(() => {
        // Preload all videos on component
        const preloadAllVideos = () => {
            for (let i = 1; i <= totalVideos; i++) {
                const video = document.createElement("video");
                video.src = getVideoSrc(i);
                video.preload = "auto";
                video.load();
            }
        };

        preloadAllVideos();
    }, []);

    useGSAP(() => {
        if (hasClicked) {

            gsap.set('#next-video', {
                opacity: 1,
            });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, {
        dependencies: [currentIndex], revertOnUpdate: true
    })

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)',
            borderRadius: '0 0 40% 10%',
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    })

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`

    return (
        <div id="home" className="relative h-dvh w-screen overflow-x-hidden bg-[#dfdff0]">

            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-[#dfdff0]">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
            >
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-xl">
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        >
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                                preload="auto"
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center opacity-0 absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                        preload="auto"
                    />

                    <video
                        ref={currentVideoRef}
                        src={getVideoSrc(currentIndex - 1 === 0 ? 4 : currentIndex - 1)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                        preload="auto"
                    />
                </div>

                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#dfdff0]">
                    Shush
                </h1>

                <div className="absolute left-0 top-40 z-40 size-full">
                    <div className="m5-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-[#dfdff0]">
                            Secret
                        </h1>

                        <p className="mb-5 max-w-64 font-OpenSans-VariableFont font-semibold text-xl text-[#dfdff0]">
                            Very secret text <br />
                            Cannot reveal the text (shhh)
                        </p>

                        <Button
                            id="watch-trailer"
                            title="This is a button"
                            leftIcon={<TiLocationArrow />}
                            containerClass="!bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                SHUSH
            </h1>

        </div>
    )
}

export default Hero