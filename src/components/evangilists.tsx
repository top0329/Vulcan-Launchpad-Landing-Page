import React from 'react';
import Image from 'next/image';

type ITEM = {
  title: string,
  description: string,
  bg: string
}

const items: ITEM[] = [
  { title: 'Endorse Projects', description: 'Provide social proof and increase trust for potential investors', bg: '#0a08139f' },
  { title: 'Earn Rewards', description: 'Receive incentives for promoting ICOs and bringing in new contributors', bg: '#eae9ec00' },
  { title: 'Build Reputation', description: 'Establish yourself as a trusted advocate in the blockchain communit', bg: '#0a08139f' },
]

const Evangilists = () => {

  const _renderItem = ({ title, description, bg }: ITEM, index: number) => (
    <div key={title} className='w-full rounded-3xl p-[1px] mt-10 bg-gradient-to-br from-[#aba0be] to-[#6a4e9b]'>
      <div className={`w-full h-full rounded-3xl bg-[url("/imgs/Elements-geometric-shape-circle-point.svg")] bg-cover bg-no-repeat`}>
        <div className={`w-full h-full pt-10 pb-14 px-5 rounded-3xl text-left bg-[${bg}]`}>
          <h2 className='text-3xl font-bold'>0{index + 1}</h2>
          <h2 className='text-xl font-bold mt-5'>{title}</h2>
          <h2 className='text-[16px] mt-3 opacity-60'>{description}</h2>
        </div>
      </div>
    </div>
  )
  return (
    <div className='mt-20 w-full text-center'>
      <h1 className="text-4xl font-bold font-dalek  text-center">
        EVANGILISTS
      </h1>
      <p className="text-[15px] text-center px-2 max-w-[860px] mt-3 mx-auto">
        Join our community of passionate evangelists who promote and support promising ICOs. As an evangelist, you can:
      </p>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-10'>
        {
          items.map((item: ITEM, index: number) => _renderItem(item, index))
        }
      </div>
    </div>
  )
}

export default Evangilists;