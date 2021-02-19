import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/zero-edge-guy.png"
            alt="Zero Edge Guy"
            layout="fill"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/jon.png"
            alt="Jon Howland"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-zero-edge.png"
            alt="Aqua Zero Edge"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/mike-jackson.png"
            alt="Mike"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-turf-edge.png"
            alt="Aqua Turf Edge"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/valerie.png"
            alt="Valerie"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-spout-extreme.png"
            alt="Aqua Spout Extreme"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide8">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/irvine.png"
            alt="Irvine"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide9">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-storm.png"
            alt="Aqua Storm"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide10">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/lynsey.png"
            alt="Lynsey"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide11">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-spout.png"
            alt="Jon Howland"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide12">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-sheer.png"
            alt="Aqua Sheer"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide12">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/theresa.png"
            alt="Thersea"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide13">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/aqua-rain.png"
            alt="Aqua Rain"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide14">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/matt.png"
            alt="Matt"
            width={1080}
            height={1920}
          />
        </div>
        <div className="keen-slider__slide number-slide15">
          <Image
            src="/everything-under-the-sun-2021/vertical-slides/denise.png"
            alt="Denise"
            width={1080}
            height={1920}
          />
        </div>
      </div>
    </>
  )
}
