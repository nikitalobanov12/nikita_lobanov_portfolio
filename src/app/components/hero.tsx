import Icons from './icons';
import React from 'react';

export default function Hero(){
    return (
    <section className=" md:mt-24 md:mb-16 my-12">
        <h1 className="text-4xl font-bold text-white leading-relaxed">Nikita Lobanov</h1>
        <p className="md:text-lg ">Full-Stack Web Developer</p>
        <ul className="grid grid-cols-3 gap-4 mt-2 w-fit">
        <Icons/>
        </ul>
    </section>
    )
}