import React from 'react';
import Image from 'next/image';

type ITEM = {
  title: string,
  image: string,
  description: string
}

const items: ITEM[] = [
  { image: '/imgs/contributes/browse.svg', title: 'Browse ICOs', description: 'Explore the list of ongoing ICOs on our platform' },
  { image: '/imgs/contributes/invest.svg', title: 'Select an ICO', description: 'Choose a project that interests you and click on it to view more details' },
  { image: '/imgs/contributes/monitor.svg', title: 'Invest', description: 'Enter the amount you wish to invest, confirm the transaction in your wallet, and receive your tokens' },
  { image: '/imgs/contributes/select.svg', title: 'Monitor Progress', description: 'Track the status of your investments and see how the projects you support are developing' },
]

const ContributeToICO = () => {

  const _renderItem = ({ image, title, description }: ITEM) => (
    <div key={title} className='relative w-full rounded-3xl p-[1px] mt-10 bg-gradient-to-b from-[#a195b6] via-[#16122f00] to-[#16122f00]'>
      <div className='w-full h-full py-20 px-10 rounded-3xl bg-[#09081D] text-left'>
        <h2 className='text-xl font-bold'>{ title }</h2>
        <h2 className='text-[16px] mt-3 opacity-60'>{ description }</h2>
      </div>
      <Image
        src={image}
        width={100}
        height={100}
        alt="image"
        className='absolute top-0 left-10 -translate-y-1/2'
      />
    </div>
  )
  return (
    <div className='mt-20 w-full text-center'>
      <h1 className="text-4xl font-bold font-dalek  text-center">
        CONTRIBUTE <span className="text-[#1B96D1]">TO ICO</span>
      </h1>
      <p className="text-[15px] text-center px-2 max-w-[860px] mt-3 mx-auto">
        Investing in promising blockchain projects is easy with Vulcan Pad. Here's how you can contribute:
      </p>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 mt-10'>
        {
          items.map((item: ITEM) => _renderItem(item))
        }
      </div>
    </div>
  )
}

export default ContributeToICO;