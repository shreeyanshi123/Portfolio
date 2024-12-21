import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import logo from "../assets/logo.png"


const Footer = () => {
  return (
   <div className='mb-8 mt-20'>
    <div className='flex items-ceneter justify-center'>
        <img src={logo} width={200} className='my-20'/>

    </div>
    <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link,index)=>(
            <a key={index} href={link.href} target="_blank" rel='noopener noreferrer'>
                {link.icon}
            </a>
        ))}
    </div>
   </div>
  )
}

export default Footer