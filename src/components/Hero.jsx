import React from 'react'
import { HERO } from "../constants"
import carlImage from "../assets/carl.jpeg"
import { motion } from "motion/react"
import { LuImport } from 'react-icons/lu'


const Hero = () => {
    return (

        <section className='flex min-h-screen flex-wrap items-center'>
            <motion.div className='w-full md:w-1/2' initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}>
                <h2 className='mb-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>{HERO.name}</h2>
                <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
                    {HERO.greet}
                </p>

                <p className='mb-8 p-2 text-xl'>
                    {HERO.description}
                </p>

                <div className='mt-8 w-1/4'>
                    <a  href='/ShreeyanshiResume.pdf' target='__blank' rel='noopener noreferrer' download className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime--400'><span>Resume.pdf</span>
                    <LuImport className='ml-2'></LuImport></a>
                
                </div>
                
            </motion.div>
            <motion.div className='w-full md:w-1/2 lg:p-8' initial={{ opacity: 0 ,scale:0.6}}
                animate={{ opacity: 1,scale:1 }}
                transition={{ duration: 1 }}>
                <div className='flex justify-center'>
                    <img src={carlImage} width={450} height={550} alt='Shreeyanshi Gupta' className='rounded-3xl' />
                </div>
            </motion.div>
        </section>

    )
}

export default Hero;