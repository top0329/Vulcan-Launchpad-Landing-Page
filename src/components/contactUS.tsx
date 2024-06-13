import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Label, TextInput, Textarea } from "flowbite-react";


const ContactUS = () => {


  return (

    <div className='w-full mt-40 py-5 rounded-3xl bg-[#0B0915] grid grid-cols-1 md:grid-cols-[55%_45%]'>
      <div className='w-full md:px-0 px-5 flex md:flex-row flex-col'>
        <div className='flex flex-row md:justify-start justify-center md:flex-col gap-3 px-10'>
          <div className='bg-white p-3 rounded-full'><Icon icon="flowbite:facebook-solid" className='text-xl text-black' /></div>
          <div className='bg-[#726868] p-3 rounded-full'><Icon icon="basil:twitter-solid" className='text-xl text-white' /></div>
          <div className='bg-white p-3 rounded-full'><Icon icon="ri:instagram-fill" className='text-xl text-black' /></div>
        </div>
        <div className='w-full md:mt-0 mt-5 md:-translate-y-20 flex flex-col gap-4 bg-[url("/imgs/team.png")] bg-cover bg-no-repeat aspect-square rounded-2xl'>
          <div className='w-full h-full px-10 py-20 bg-[#6565afe7] rounded-2xl flex flex-col gap-4'>
            <h5 className='opacity-70 text-sm'>Contact With Me</h5>
            <h1 className='text-2xl font-dalek'>Join Vulcan Pad<br />Today</h1>
            <h5 className='opacity-70 text-sm'>The sky was cloudless and of a deep dark blue. The spectacle before us was indeed sublime.</h5>
          </div>
        </div>
      </div>

      <div className='w-full px-2 md:px-12 flex flex-col gap-4 py-10'>
        <h2 className='text-sm'>Your email address will not be published. Required fields are marked*</h2>
        <TextInput id="name" type="text" sizing="md" placeholder='Your Name *' />
        <TextInput id="email" type="text" sizing="md" placeholder='Your Email *' />
        <Textarea id="comment" placeholder="Question *" required rows={4} />
        <button onClick={() => window.open('https://app.turbotrade.tech/liquidity/add/')} className="flex justify-center items-center gap-3 text-white px-6 text-[12px] py-3 rounded-xl bg-gradient-to-r from-[#00D7E1] to-[#2B6EC8] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
          Send Message
        </button>
      </div>
    </div>
  )
}

export default ContactUS;