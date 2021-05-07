import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animationsMoveX = (el) => {
  gsap.fromTo(
    el,
    {
      autoAlpha: 0,
      x: '-=100',
      duration: 1,
    },
    {
      autoAlpha: 1,
      x: 0,
    }
  );
};

export const animationsMoveY = (el, toTop) => {
  if (toTop)
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        x: '+=100',
        duration: 1,
      },
      {
        autoAlpha: 1,
        x: 0,
      }
    );
  else
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: '-=100',
        duration: 1,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    );
};

export const animationOpacity = (el, durationTime) => {
  gsap.fromTo(
    el,
    {
      autoAlpha: 0,

      duration: `${durationTime}`,
    },
    {
      autoAlpha: 1,
    }
  );
};

export const aniamtionScrollBottom = (el) => {
  gsap.fromTo(
    el,
    {
      autoAlpha: 0,
      y: '+=100',
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.7,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
      },
    }
  );
};

export const aniamtionMoveXScroll = (el, translate) => {
  gsap.fromTo(
    el,
    {
      autoAlpha: 0,
      x: `${translate}`,
      duration: 1,
    },
    {
      x: 0,
      autoAlpha: 1,
      duration: 0.7,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      },
    }
  );
};
