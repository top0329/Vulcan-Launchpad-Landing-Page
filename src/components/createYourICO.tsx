import React from 'react';

const CreateYourICO = () => {
  return (
    <div className='mt-20 w-full text-center'>
      <h1 className="text-4xl font-bold font-dalek  text-center">
        CREATE <span className="text-[#1B96D1]">YOUR ICO</span>
      </h1>
      <p className="text-[15px] text-center px-2 max-w-[860px] mt-3 mx-auto">
        Launching your ICO on Vulcan Pad is simple and straightforward. Follow these steps to get started:
      </p>
      <div className='w-full rounded-3xl p-[1px] mt-10 bg-gradient-to-br from-[#bfb2d4] via-[#241e49] to-[#16122F]'>
        <div className='w-full h-full p-10 rounded-3xl bg-[#0A0918] grid grid-cols-1 md:grid-cols-2 gap-y-12'>
          <div className='w-full text-center flex flex-col items-center gap-3 md:border-r border-[#ffffff18]'>
            <h2 className='text-xl font-bold'>Sign <span className='text-blue-400'>In</span></h2>
            <div className='w-10 h-[2px] bg-gradient-to-r from-blue-300 to-blue-700'></div>
            <p>Use your Metamask wallet to sign in<br/>securely</p>
          </div>
          <div className='w-full text-center flex flex-col items-center gap-3'>
            <h2 className='text-xl font-bold'>Enter <span className='text-blue-400'>Project Details</span></h2>
            <div className='w-10 h-[2px] bg-gradient-to-r from-blue-300 to-blue-700'></div>
            <p>Provide your project name, description, token information, social media, and upload a logo and a Video via youtube link </p>
          </div>
          <div className='w-full text-center flex flex-col items-center gap-3 md:border-r border-[#ffffff18]'>
            <h2 className='text-xl font-bold'>Set Campaign <span className='text-blue-400'>Parameters</span></h2>
            <div className='w-10 h-[2px] bg-gradient-to-r from-blue-300 to-blue-700'></div>
            <p>Define the total sale amount, price per token, denominated in ETH or USD, and campaign duration.</p>
          </div>
          <div className='w-full text-center flex flex-col items-center gap-3'>
            <h2 className='text-xl font-bold'>Submit and <span className='text-blue-400'>Launch</span></h2>
            <div className='w-10 h-[2px] bg-gradient-to-r from-blue-300 to-blue-700'></div>
            <p>Pay a small fee to filter spam, submit your<br/>ICO, and start raising funds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateYourICO;