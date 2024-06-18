"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CoolDownModal from "@/components/coolDown";
import Header from "@/components/header";
import { describe } from "node:test";
import CreateYourICO from "@/components/createYourICO";
import ContributeToICO from "@/components/contributeToICO";
import Evangilists from "@/components/evangilists";
import Accreditors from "@/components/accreditors";
import ContactUS from "@/components/contactUS";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface IFeature {
  title: string;
  description: string;
}

interface IFAQ {
  title: React.ReactElement,
  description: string
}

interface IRoadMapItem {
  image: string,
  title: string,
  description: string
}

const features = [
  {
    title: "User-Friendly Interface",
    description:
      "Intuitive design makes it easy for both ICO creators and investors to navigate the platform.",
  },
  {
    title: "Secure Platform",
    description:
      "Robust authentication, non-custodial transactions, and smart contract management ensure your security.",
  },
  {
    title: "Unique Fee Structure",
    description:
      "A 5% fee distributed among CryptoSI DAO (2.5%), Contribution partners (1.5%) and Listing partners (1%)",
  },
  {
    title: "Future-Ready",
    description:
      "Continuous updates and new features to adapt to the evolving blockchain and regulatory landscape.",
  },
];

const roadMaps: IRoadMapItem[] = [
  { title: 'Phase 1', description: 'Platform Launch - Establishing a secure and user-friendly platform for ICO creation and investment', image: '/steaming.png' },
  { title: 'Phase 2', description: 'Feature Enhancements - Introducing NFT Gating, max purchase limits, and third-party investment capabilities', image: 'savors.svg' },
  { title: 'Phase 3', description: 'Community Growth - Expanding our network of users, affiliates, and partners', image: '/serai.svg' },
  { title: 'Phase 4', description: 'Continuous Improvement - Regular updates and new features to keep pace with blockchain innovations', image: '/serai.svg' },
]

const faqs = [
  { title: <>What is Vulcan Pad ?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>, description: "A decentralised ICO platform with revolutionary regulation supporting features." },
  { title: <>Is it legal to launch my own ICO ?</>, description: "This depends on your jurisdiction, please seek legal advice" },
  { title: <>Is it legal to contribute to an ICO?</>, description: "This depends on your jurisdiction, please seek legal advice" },
  { title: <>What is the fee structure?</>, description: "5% of all tokens raised will be split between CryptoSI DAO (2.5%) listing partners (1%) and contribution partners (2.5%)" },
  { title: <>When will I receive my tokens?</>, description: "You will receive your tokens when the ICO has completed IF the softcap was reached. Reaching the hardcap will complete an ICO immediately." },
  { title: <>What is CryptoSI DAO?</>, description: "A revolutionary venture DAO building Dapps for a prosperous future." },
]

const services = [
  { image: '/imgs/new-ico.png', title: 'ICO Launch', description: 'Seamlessly create and launch your ICO, complete with all necessary tools and support', discord: false },
  { image: '/imgs/ico-opporunities.png', title: 'Contribution opportunities', description: 'Browse and contribute to a variety of ICOs, each offering unique and innovative projects', discord: false },
  { image: '/imgs/3.png', title: 'Support and Guidance', description: 'Access resources and support from our team and community to help you succeed', discord: true },
  { image: '/imgs/wallet-integration.png', title: 'Wallet Integration', description: 'Easy integration with popular crypto wallets for smooth transactions', discord: false },
]

export default function Home() {
  const [feature, setFeature] = React.useState<string>("User-Friendly Interface");
  const [startIntro, setStartIntro] = React.useState<boolean>(false);
  const [startShortVideo, setStartShortVideo] = React.useState<boolean>(false);

  const _renderFeatureItem = (
    { title, description }: IFeature,
    index: number
  ) => (
    <div key={index} className="w-full cursor-pointer" onClick={() => setFeature(title)}>
      <div
        className={`border-b ${feature !== title ? "border-[#d9d9d954]" : "border-white"
          }`}
      ></div>
      <h2 className="mt-4 text-[#757185] text-[12px]">0{index}.</h2>
      <h2 className="text-sm mt-2">{title}</h2>
      <div className="min-h-[100px]">
        {feature === title && (
          <p className="text-[#B6B1C8] text-[12px] mt-5">{description}</p>
        )}
      </div>
    </div>
  );

  const _renderRoadmapItem = ({ image, title, description }: IRoadMapItem) => (
    <div className="w-full" key={title}>
      <div className="flex items-center">
        <div className="h-[1px] w-[50px] border-b-2 border-[#ffffff2d] flex lg:hidden"></div>
        <div className="w-[90px]">
          <div className="h-14 w-[1px] border-l-2 border-[#ffffff2d] ml-[50%] hidden lg:flex"></div>
          <div className="w-[90px] h-[90px] items-center justify-center flex rounded-full border-2 border-[#ffffff2d]">
            <div className="bg-[#11ACD6] p-2 items-center justify-center flex rounded-full border-[8px] border-[#1C0D34]">
              <Image src={image} width={40} alt="" height={40} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-lg text-white mt-10 pl-12 lg:pl-0">
        {title}
      </h1>
      <p className="text-sm text-[#C4CBF5] mt-5 leading-6 pl-12 lg:pl-0">
        {description}
      </p>
    </div>
  );

  const _renderServiceItem = ({ image, title, description, discord }: { image: string, title: string, description: string, discord: boolean }) => (
    <div key={title} className="relative w-full h-full">
      <div className="absolute right-1 top-1 -z-10 w-20 h-20 rounded-2xl bg-[#ec4040]"></div>
      <div className="w-full flex flex-col rounded-2xl h-full clip bg-[#342E52] px-6 py-10 rounded-tr-[55px] border-b border-white]">
        <Image
          src={image}
          width={0}
          alt=""
          height={0}
          sizes="100vw"
          className="w-auto rounded-md aspect-video"
        />
        <div className="flex flex-col justify-around w-full grow">
          <h1 className="text-white text-[16px] mt-6">
            {title}
          </h1>
          <h2 className="text-sm mt-6 text-[#dddddd] leading-7">
            {description}
          </h2>
          <div className="flex justify-between mt-6">
            { discord ? <a href="https://discord.gg/G3qFyvYuBt">Join our discord</a> : '' }
            <Image
              className="cursor-pointer"
              src="/arrow.svg"
              width={20}
              alt=""
              height={20}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  )

  const _renderFAQ = ({ title, description }: IFAQ) => (
    <div className="w-full " key={description}>
      <div className="flex gap-4 items-start">
        <div className="w-4 pt-1"><Icon icon="octicon:info-16" width={20} /></div>
        <h2>{title}</h2>
      </div>
      <div className="border-b border-dashed border-white border-[#ffffff32f] my-3"></div>
      <p className="text-[12px] text-[#ffffffa6] leading-5">{description}</p>
    </div>
  )

  return (
    <>
      <Header />
      <div className="relative">
        <div className="absolute t-0 w-full -z-50 h-full bg-[#0D0A1C]">
          <div className="w-full h-full bg-[url('/bg-tile.svg')] opacity-[0.05] flex justify-center"></div>
        </div>

        <div className="flex flex-col items-center z-50 pt-20 text-white max-w-[1000px] px-5 mx-auto pb-10">
          <h1 className="text-4xl font-bold font-dalek  text-center">
            WELCOME TO <span className="text-[#1B96D1]">VULCAN PAD</span>
          </h1>
          <p className="text-[15px] text-center px-2 max-w-[860px] mt-8">
            Your gateway to launching and investing in innovative blockchain projects.
          </p>
          <p className="text-[15px] text-center px-2 max-w-[860px]">
            Our platform provides a secure, transparent and efficient environment for Initial Coin Offerings (ICOs) on the Arbitrum, Base and BNB Networks, empowering creators and investors to bring new ideas to life.
          </p>

          <div className="flex justify-center w-full gap-3">
            {/* <button onClick={() => window.open('https://app.turbotrade.tech/liquidity/')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-sm py-4 rounded-xl bg-gradient-to-r from-[#00D7E1] to-[#2B6EC8] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
              Subscribe today <Icon icon="pajamas:long-arrow" />
            </button> */}
            <button onClick={() => window.open('https://app.vulcanpad.tech/', '_blank')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-sm py-4 rounded-xl bg-transparent border border-[#00D7E1]">
              Launch the App <Icon icon="pajamas:long-arrow" />
            </button>
          </div>

          <div className="w-full mt-20">
            <div className="w-full text-center border-2 bg-[#2285CE] border-[#a56bec86] pt-4 rounded-t-2xl p-2 flex justify-center items-center">
              Watch this short video to learn more about how Vulcan Pad was built in public.
            </div>
            <div className="w-full border-2 border-[#a56bec86] bg-[#ffffff31] pt-4 rounded-b-2xl">
              <div className="aspect-video rounded-b-2xl w-full h-full flex justify-center items-center bg-black">
                {
                  startIntro ?
                    <ReactPlayer
                      controls
                      className="react-player rounded-[19px]"
                      url='https://youtu.be/OATeH6CaA28'
                      width="100%"
                      height="100%"
                    /> :
                    <div className="w-full h-full relative">
                      <Image
                        src="/imgs/thumbnail.png"
                        width={0}
                        alt=""
                        height={0}
                        sizes="100vw"
                        className="w-auto h-full rounded-b-2xl"
                      />
                      <Icon onClick={() => setStartIntro(true)} width={100} icon="material-symbols-light:smart-display-outline-rounded" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-60" />
                    </div>
                }
              </div>
            </div>
            <div className="bg-[#443A73] w-[95%] h-5 mx-auto rounded-b-full"></div>
          </div>

          <h1 className="text-4xl font-bold mt-20 text-center">Features at a Glance</h1>
          <h2 className="text-[#FF9E65] text-lg mt-5">
            Complexity becomes simplicity
          </h2>
          <div className="w-full grid sm:grid-cols-4 grid-cols-1 gap-2 mt-8">
            {features.map((item: IFeature, index: number) =>
              _renderFeatureItem(item, index)
            )}
          </div>

          <h1 className="text-4xl font-bold mt-20">Our Services</h1>
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1 mt-5">
            {services.map((item => _renderServiceItem(item)))}
          </div>

          <h1 className="text-4xl font-bold mt-20 text-center">
            Watch this short video to learn more about how Vulcan Pad
          </h1>
          <div className="w-full mt-5 p-2 md:p-8 rounded-xl border-2 bg-gradient-to-r from-[#ffffff4d] to-[#ffffff09] border-[#ffffff3b]">
            <div className="flex gap-3">
              <div className="flex items-center">
                <div className="w-6">
                  <Icon icon="oui:dot" width={30} className="w-10" />
                </div>
                <div className="w-6">
                  <Icon
                    icon="oui:dot"
                    width={30}
                    className="w-10 text-[#0AEC94]"
                  />
                </div>
                <div className="w-6">
                  <Icon icon="oui:dot" width={30} className="w-10" />
                </div>
              </div>
              <div className="bg-white text-left flex items-center p-3 rounded-xl text-[#8993AE] w-full text-[15px] truncate">
                https://vulcanpad.tech
              </div>
            </div>
            <div className="react-player mt-2 relative">
              {
                startShortVideo ?
                  <div className="w-full h-full aspect-video bg-blue-950 rounded-2xl">
                    <ReactPlayer
                      controls
                      className="react-player"
                      url='https://youtu.be/KVhBumfWDWE'
                      width="100%"
                      height="100%"
                    />
                  </div> :
                  <div className="w-full h-full">
                    <Image
                      src="/imgs/dao-thumbnail.png"
                      width={0}
                      alt=""
                      height={0}
                      sizes="100vw"
                      className="w-auto h-full rounded-2xl"
                    />
                    <Icon onClick={() => setStartShortVideo(true)} width={100} icon="material-symbols-light:smart-display-outline-rounded" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-60" />
                  </div>
              }
            </div>
          </div>

          <h2 className="text-lg text-[#14A5D5] mt-20">Advantages of our company</h2>
          <h1 className="text-4xl font-bold text-center md:text-left">Our Roadmap to Innovation</h1>
          <div className='w-full rounded-3xl p-[1px] mt-10 bg-gradient-to-br from-[#bfb2d4] via-[#241e49] to-[#16122F]'>
            <div className="w-full h-full rounded-3xl bg-[#0A0918] grid grid-cols-1 lg:grid-cols-4 pt-10 lg:pt-0 lg:pl-12 pr-12 gap-10 pb-20">
              {
                roadMaps.map((item: IRoadMapItem) => _renderRoadmapItem(item))
              }
            </div>
          </div>

          <CreateYourICO />
          <ContributeToICO />
          <Evangilists />
          <Accreditors />

          {/* <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#ff6a0096] via-[#6d78b280] to-[#e02d6f86] mt-20 w-full shadow-[15px_15px_3px_black]">
            <div className="rounded-2xl p-8 bg-[#120D28] dark:bg-[##120D28] dark:text-white grid lg:grid-cols-[60%_40%] grid-cols-1 gap-5 items-center">
              <Image
                src="/add-lp.png"
                width={0}
                alt=""
                height={0}
                sizes="100vw"
                className="w-auto rounded-md aspect-video"
              />
              <div>
                <h1 className="text-3xl font-bold">Add Liquidity <span className="text-red-700">Page</span></h1>
                <p className="text-[16px] mt-5 leading-7">Engage with liquidity pools dynamically. Choose between single or double-sided pools with a simple click, accompanied by vivid asset logos and essential pool stats</p>
                <button onClick={() => window.open('https://app.turbotrade.tech/liquidity/add/')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-[12px] py-3 rounded-xl bg-gradient-to-r from-[#00D7E1] to-[#2B6EC8] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
                  Get Started <Icon icon="pajamas:long-arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#ff6a0096] via-[#6d78b280] to-[#e02d6f86] mt-20 w-full shadow-[15px_15px_3px_black]">
            <div className="rounded-2xl p-8 bg-[#120D28] dark:bg-[##120D28] dark:text-white grid lg:grid-cols-[40%_60%] grid-cols-1 gap-5 items-center">
              <div>
                <h1 className="text-3xl font-bold">Remove Liquidity <span className="text-red-700">Page</span></h1>
                <p className="text-[16px] mt-5 leading-7">A distinct design to prevent confusion. Withdraw liquidity with clarity, aided by auto-populated amounts, quick-select options, and a cooldown timer for secure transactions.</p>
                <button onClick={() => window.open('https://app.turbotrade.tech/liquidity/remove/')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-[12px] py-3 rounded-xl bg-gradient-to-r from-[#FF6802] to-[#EE0E72] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
                  Get Started <Icon icon="pajamas:long-arrow" />
                </button>
              </div>
              <Image
                src="/remove-lp.png"
                width={0}
                alt=""
                height={0}
                sizes="100vw"
                className="w-auto rounded-md aspect-video"
              />
            </div>
          </div>

          <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#ff6a0096] via-[#6d78b280] to-[#e02d6f86] mt-20 w-full shadow-[15px_15px_3px_black]">
            <div className="rounded-2xl p-8 bg-[#120D28] dark:bg-[##120D28] dark:text-white grid lg:grid-cols-[60%_40%] grid-cols-1 gap-5 items-center">
              <Image
                src="/wallet-connect.png"
                width={0}
                alt=""
                height={0}
                sizes="100vw"
                className="w-auto rounded-md aspect-video"
              />
              <div>
                <h1 className="text-3xl font-bold">Wallet Connect <span className="text-red-700">Page</span></h1>
                <p className="text-[16px] mt-5 leading-7">Where your journey begins. Connect or create wallets with ease, guided by helpful tutorials and a user-friendly interface</p>
                <button onClick={() => window.open('https://app.turbotrade.tech/connect-wallet/')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-[12px] py-3 rounded-xl bg-gradient-to-r from-[#FF6802] to-[#EE0E72] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
                  Get Started <Icon icon="pajamas:long-arrow" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#ff6a0096] via-[#6d78b280] to-[#e02d6f86] mt-20 w-full shadow-[15px_15px_3px_black]">
            <div className="rounded-2xl p-8 bg-[#120D28] dark:bg-[##120D28] dark:text-white grid lg:grid-cols-[40%_60%] grid-cols-1 gap-5 items-center">
              <div>
                <h1 className="text-3xl font-bold">My Wallet <span className="text-red-700">Page</span></h1>
                <p className="text-[16px] mt-5 leading-7">Manage your assets with confidence. View balances in both token and USD, copy addresses effortlessly, and customize your view to hide zero-balance tokens</p>
                <button onClick={() => window.open('https://app.turbotrade.tech/my-wallet')} className="flex justify-center items-center gap-3 text-white mt-7 px-6 text-[12px] py-3 rounded-xl bg-gradient-to-r from-[#FF6802] to-[#EE0E72] hover:from-[#ff6702de] hover:to-[#ee0e739f]">
                  Get Started <Icon icon="pajamas:long-arrow" />
                </button>
              </div>
              <Image
                src="/wallet.png"
                width={0}
                alt=""
                height={0}
                sizes="100vw"
                className="w-auto rounded-md aspect-video"
              />
            </div>
          </div> */}

          <h1 className="text-4xl font-bold mt-24 text-center">Frequently <span className="text-red-600">Asked</span> Questions</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10">
            {faqs.map((item: IFAQ) => _renderFAQ(item))}
          </div>

          {/* <ContactUS />

          <Footer />  */}
        </div>
      </div>
    </>
  );
}
