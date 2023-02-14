'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, activeId, setActiveId }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      activeId === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => setActiveId(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      fill
      sizes="(max-width: 1200px) 100vw, 100vw"
      className="object-cover rounded-[24px]"
    />
    {activeId !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <motion.div
        variants={fadeIn(null, 'spring', 0.3, 0.75)}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] md:p-8 p-4"
      >
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] bg-[rgba(255,255,255,0.5)] mb-[16px]`}
        >
          <div className="w-1/2 h-1/2 relative">
            <Image
              src="/img/headset.svg"
              alt="headset"
              fill
              sizes="(max-width: 1200px) 100vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </motion.div>
    )}
  </motion.div>
);

export default ExploreCard;
