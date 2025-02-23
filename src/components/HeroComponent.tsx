import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import Code from '../assets/logos/code.webp'
import { Techs,Features } from '../constants/constants';

export default function HeroComponent() {
    const [emblaRef] = useEmblaCarousel({ loop: true, axis: 'x', align: 'start' }, [Autoplay({ delay: 2000 })])
    const [emblaTextRef] = useEmblaCarousel({ loop: true, axis: 'x', align: 'start' }, [Autoplay({ delay: 2000 })])
    
    return (
        <div className="2xl:w-full lg:w-auto h-full flex flex-col justify-center items-center transition-all ">
      <div className='overflow-hidden bg-foreground py-24 sm:py-32 grid grid-cols-2 w-4/6 h-full'>
        <section className='container flex flex-col items-start pl-5 justify-center h-full '>
          <p className='text-fire-text text-left'>Hi, My name is</p>
          <h1 className='text-[56px] text-left'>Hrishikesh Chari</h1>
          <div className='text-[48px] text-left '>
            I am <span className='text-fire-text'>Full Stack</span> Developer.
          </div>

          <p className='opacity-55'>As a dedicated software engineer specializing in web development and full-stack applications, I have a strong focus on creating dynamic, user-friendly web solutions. My front-end expertise includes modern technologies like React, Next.js, and Angular, enabling me to craft responsive and intuitive user interfaces. On the back-end, I leverage Node.js and NestJS to build scalable, efficient APIs and server-side solutions. With a commitment to clean code, performance optimization, and seamless integration, I strive to deliver high-quality web applications that meet both user expectations and business objectives.</p>
        </section>
        <section ref={emblaRef} className='embla w-full container flex items-center justify-center h-full '>
          <div className='embla__container w-full rounded-3xl flex flex-row'>
            {Techs.map((el, index) => {
              return (
                <div key={index} className="cards embla__slide rounded-3xl flex flex-col justify-center items-center gap-3">
                  <img src={el.img} width={150} height={150} alt=''></img>
                  {/* <h1 className='text-[56px] text-left text-peach'>{el.tech}</h1> */}
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <div id='experience' className="overflow-hidden bg-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-fire-text">Best practices</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {Features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' : '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
           
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={Code}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
    </div>
    )
}
