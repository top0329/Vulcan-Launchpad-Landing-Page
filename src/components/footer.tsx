import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Label, TextInput, Textarea } from "flowbite-react";


const Footer = () => {


  return (

    <div className='w-full mt-20 py-5 grid md:text-left text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10'>
      <div className='w-full flex flex-col gap-3 md:items-start items-center'>
        <Image
          className="cursor-pointer"
          src={`/imgs/logo.svg`}
          width={68}
          height={68}
          alt={"logo"}
          priority={true}
        />
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Open an account in minutes<br/>, get full Control for much longer. </a>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h5 className='text-xl font-dalek'>PRODUCT</h5>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Manage your Cap Table</a>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Raise Capital</a>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Start/Manage Option Plan</a>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h5 className='text-xl font-dalek'>Help</h5>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Terms & Conditions</a>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Privacy Policy</a>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Legal & Accounting Help</a>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>Security</a>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h5 className='text-xl font-dalek'>Newsletter</h5>
        <a className='text-xs opacity-70 cursor-pointer hover:underline'>News, insights and events in your inbox!</a>
        <TextInput id="name" type="text" sizing="sm" placeholder='Email *' />
        <div className='w-full flex justify-center md:justify-start'>
          <button className="flex justify-center items-center gap-3 text-white px-4 text-[12px] py-2 rounded-full bg-gradient-to-r from-[#00D7E1] to-[#2B6EC8] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;