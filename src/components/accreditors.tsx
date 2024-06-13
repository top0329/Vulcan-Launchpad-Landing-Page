import React from 'react';
import Image from 'next/image';

type ITEM = {
  title: string,
  image: string,
  description: string
}

const items: ITEM[] = [
  { image: '/imgs/accreditors/validate.svg', title: 'Validate Projects', description: 'Ensure the legitimacy and credibility of ICOs listed on our platform' },
  { image: '/imgs/accreditors/enhance.svg', title: 'Enhance Security', description: 'Contribute to a secure environment by vetting projects and protecting investors' },
  { image: '/imgs/accreditors/earn.svg', title: 'Earn Recognition', description: 'Gain acknowledgment and rewards for your role in maintaining the integrity of our platform' },
]

const Accreditors = () => {

  const _renderItem = ({ title, description, image }: ITEM, index: number) => (
    <div key={title} className='w-full rounded-3xl mt-10 bg-gradient-to-br p-[6px] from-[#03d1e0ea] to-[#005dd7ef]'>
      <div className={`w-full h-full p-6 rounded-3xl bg-gradient-to-br from-[#03d1e0] to-[#005CD7]`}>
        <Image
          src={image}
          width={50}
          height={50}
          alt="image"
        />
        <h2 className='text-xl font-bold mt-5'>{title}</h2>
        <h2 className='text-[16px] mt-3 opacity-60'>{description}</h2>
      </div>
    </div>
  )
  return (
      <div className='mt-40 w-full text-left rounded-3xl p-[1px] border border-[#bfb2d4] via-[#241e49] to-[#16122F]'>
        <div className='w-full h-full p-6 rounded-3xl bg-[#0A0918]'>
          <h1 className="text-4xl font-bold font-dalek">
            Accreditors
          </h1>
          <p className="text-[15px] max-w-[860px] mt-3">
            Become an accreditor on Vulcan Pad and help verify and authenticate ICO projects. As an accreditor, you can:
          </p>
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-3'>
            {
              items.map((item: ITEM, index: number) => _renderItem(item, index))
            }
          </div>
        </div>
      </div>
  )
}

export default Accreditors;