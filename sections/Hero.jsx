'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className="sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.innerWidth} mx-auto pt-24`}
    >
      <div className="flex flex-col items-center relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1.3)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <div className="w-full sm:h-[500px] h-[350px] z-10 relative">
          <Image
            src="/img/cover.png"
            alt="hero_cover"
            fill
            sizes="(max-width: 1200px) 100vw, 100vw"
            priority
            className="object-cover rounded-tl-[140px]"
          />
        </div>

        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <div className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] relative">
            <Image
              src="/img/stamp.png"
              alt="stamp"
              priority
              fill
              sizes="(max-width: 1200px) 100vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
