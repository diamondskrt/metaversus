'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from '../styles';
import { socials } from '../constants';
import { fadeIn } from '../utils/motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(true);
  const [isTop, setIsTop] = useState(false);

  const menuLinks = [
    { title: 'About Metaversus', href: '#about' },
    { title: 'How Metaversus Works?', href: '#howworks' },
    { title: 'Whats new?', href: '#whatsnew' },
    { title: 'Insight', href: '#insight' },
  ];

  const onSelectMenuLink = (href) => {
    const anchor = document.querySelector(href);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const onOpenMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const onScroll = (event) => {
    if (window.pageYOffset) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    const { scrollTop } = event.target.scrollingElement;

    if (!scrollTop) return;

    if (scrollTop > lastScrollTop) {
      setIsScrolledDown(false);
    } else {
      setIsScrolledDown(true);
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    const root = document.getElementsByTagName('html')[0];

    if (menuOpen) {
      root.className = 'scroll-blocked';
    } else {
      root.className = '';
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, menuOpen]);

  return (
    <>
      <motion.nav
        variants={fadeIn(null, null, null, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${
          isScrolledDown || menuOpen ? 'top-0' : '-top-full'
        } left-0 w-full fixed transition-all ease-in-out duration-500 z-40`}
      >
        <div className={`${menuOpen ? 'scrollbar-offset' : ''}`}>
          <div
            className={`relative ${styles.xPaddings} ${
              isTop && !menuOpen ? 'bg-black' : 'bg-transparent'
            } py-8`}
          >
            <div className="absolute w-[50%] inset-0 gradient-01" />
            <div
              className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
              <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
                METAVERSUS
              </h2>

              <div className="cursor-pointer" onClick={onOpenMenu}>
                <div className="w-[26px] h-[26px] relative">
                  {menuOpen ? (
                    <Image
                      src="/img/close.svg"
                      alt="close"
                      fill
                      sizes="(max-width: 1200px) 100vw, 100vw"
                    />
                  ) : (
                    <Image
                      src="/img/menu.svg"
                      alt="menu"
                      fill
                      sizes="(max-width: 1200px) 100vw, 100vw"
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {menuOpen && (
        <motion.nav
          variants={fadeIn(null, null, null, 0.5)}
          initial="hidden"
          whileInView="show"
          className="fixed inset-0 w-full h-full bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-30"
        >
          <div
            className={`${styles.paddings} h-full flex flex-col justify-between items-center`}
          >
            <div />

            <div className="flex flex-col gap-8 font-extrabold sm:text-[32px] text-[20px] text-center text-white uppercase cursor-default">
              {menuLinks.map((link) => (
                <div
                  key={link.href}
                  onClick={() => onSelectMenuLink(link.href)}
                  className="cursor-pointer"
                >
                  {link.title}
                </div>
              ))}
            </div>

            <div className="social">
              <div className="flex gap-4">
                {socials.map((social) => (
                  <div
                    key={social.name}
                    className="w-[24px] h-[24px] relative cursor-default"
                  >
                    <Image
                      src={social.imgUrl}
                      alt={social.name}
                      fill
                      sizes="(max-width: 1200px) 100vw, 100vw"
                      className=" object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
