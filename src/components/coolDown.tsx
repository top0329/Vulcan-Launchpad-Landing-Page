"use client";
import React from "react";

interface IProps {
  showCoolDown: boolean,
  setShowCoolDown: React.Dispatch<React.SetStateAction<boolean>>,
}

const CoolDownModal = ({showCoolDown, setShowCoolDown}: IProps) => {
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const [distance, setDistance] = React.useState<number>(0);
  const countDownDate = new Date("April 5, 2024 17:00:00 UTC").getTime();

  React.useEffect(() => {
    const _now = new Date().getTime();
    const _distance = countDownDate - _now;
    if (_distance > 0) {
      setShowCoolDown (true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    timerRef.current = setInterval(async () => {
      const _now = new Date().getTime();
      const _distance = countDownDate - _now;
      setDistance(_distance);
      
      if ((_distance < 0 || isNaN(_distance)) && timerRef.current) {
        clearInterval(timerRef.current);
        setShowCoolDown (false);
      }
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return () => {
    //@ts-ignore
    clearInterval(timerRef.current);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [ days, hours, minutes, seconds ] = React.useMemo(() => {
    let days: string|number = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours: string|number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes: string|number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds: string|number = Math.floor((distance % (1000 * 60)) / 1000);

    days = days > 9 ? days : '0' + days;
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;

    return [days, hours, minutes, seconds];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance])

  return (
    <div className={`${showCoolDown ? 'fixed': 'hidden'} top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center px-3`}>
      <div onClick={() => setShowCoolDown(false)} className="fixed top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-[10px]"></div>
      <div className="max-w-[700px] relative z-50">
        <div className="absolute right-1 top-1 -z-10 w-40 h-40 rounded-xl bg-[#ec4040]"></div>
        <div className="w-full flex flex-col rounded-2xl cool-down-clip bg-[#342E52] md:px-10 sm:px-5 px-2 py-10 border-b border-white]">
          <h1 className="text-white lg:text-4xl md:text-2xl text-xl mt-6 font-bold text-center">
            Coming Soon
          </h1>

          <div className="w-full grid grid-cols-4 md:gap-5 gap-1 mt-14">
            <div className="rounded-xl p-4 flex flex-col justify-center bg-[#16122F] items-center timer-clip">
              <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-bold text-white">{days}</h1>
              <h3 className="lg:text-2xl text-[15px] text-gray-400">DAYS</h3>
            </div>
            <div className="rounded-xl p-4 flex flex-col justify-center bg-[#16122F] items-center timer-clip">
              <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-bold text-white">{hours}</h1>
              <h3 className="lg:text-2xl text-[15px] text-gray-400">HOURS</h3>
            </div>
            <div className="rounded-xl p-4 flex flex-col justify-center bg-[#16122F] items-center timer-clip">
              <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-bold text-white">{minutes}</h1>
              <h3 className="lg:text-2xl text-[15px] text-gray-400">MINS</h3>
            </div>
            <div className="rounded-xl p-4 flex flex-col justify-center bg-[#16122F] items-center timer-clip">
              <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-bold text-white">{seconds}</h1>
              <h3 className="lg:text-2xl text-[15px] text-gray-400">SECS</h3>
            </div>
            
          </div>

          <h3 className="text-white sm:text-2xl text-lg text-center mt-10">
            Turbo trading starts on April 5th at 17:00 UTC
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoolDownModal;
