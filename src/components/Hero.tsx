"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/constants";
import { HeroVisual } from "./HeroVisual";

const SLIDE_INTERVAL = 6000;

const slideThemes = {
  web: {
    bg: "from-orange-100/70 via-white to-amber-50/40",
    orb: ["bg-orange-400/35", "bg-amber-300/30", "bg-orange-200/20"],
    sweep: "from-transparent via-orange-400/50 to-transparent",
  },
  recruitment: {
    bg: "from-rose-100/60 via-white to-orange-50/40",
    orb: ["bg-rose-400/30", "bg-orange-300/28", "bg-amber-200/18"],
    sweep: "from-transparent via-rose-400/45 to-transparent",
  },
  backoffice: {
    bg: "from-amber-100/60 via-white to-orange-50/30",
    orb: ["bg-amber-400/32", "bg-orange-300/26", "bg-yellow-200/16"],
    sweep: "from-transparent via-amber-400/45 to-transparent",
  },
} as const;

const headlineContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const headlineItem = {
  initial: { opacity: 0, y: 56, rotateX: -28, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 320, damping: 26 },
  },
  exit: {
    opacity: 0,
    y: -40,
    rotateX: 20,
    filter: "blur(8px)",
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const highlightItem = {
  ...headlineItem,
  initial: { opacity: 0, y: 64, scale: 0.82, rotateX: -32, filter: "blur(12px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

const contentItem = {
  initial: { opacity: 0, x: -32, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    x: 32,
    filter: "blur(6px)",
    transition: { duration: 0.3 },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const [sweepKey, setSweepKey] = useState(0);

  const goToSlide = useCallback((targetIndex: number) => {
    setActiveIndex((current) => {
      if (targetIndex === current) return current;

      let dir = 1;
      if (targetIndex > current) dir = 1;
      else if (targetIndex < current) dir = -1;
      if (current === heroSlides.length - 1 && targetIndex === 0) dir = 1;
      if (current === 0 && targetIndex === heroSlides.length - 1) dir = -1;

      setDirection(dir);
      setSweepKey((k) => k + 1);
      return targetIndex;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setSweepKey((k) => k + 1);
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setSweepKey((k) => k + 1);
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [reduceMotion, paused, activeIndex]);

  const slide = heroSlides[activeIndex];
  const theme = slideThemes[slide.id as keyof typeof slideThemes];

  const textVariants = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: direction * 80 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -80 },
        transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] as const },
      };

  const visualVariants = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          x: direction * 140,
          rotateY: direction * -18,
          scale: 0.78,
          filter: "blur(16px)",
        },
        animate: {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { type: "spring" as const, stiffness: 220, damping: 26, delay: 0.08 },
        },
        exit: {
          opacity: 0,
          x: direction * -100,
          rotateY: direction * 12,
          scale: 0.86,
          filter: "blur(12px)",
          transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
        },
      };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-50 via-white to-slate-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${theme.bg}`}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id} className="absolute inset-0">
            <div
              className={`hero-orb absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full blur-[100px] ${theme.orb[0]}`}
            />
            <div
              className={`hero-orb-delayed absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full blur-[100px] ${theme.orb[1]}`}
            />
            <div
              className={`hero-orb absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[80px] ${theme.orb[2]}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div
            className="hero-grid-animate absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
      </div>

      {!reduceMotion && (
        <div
          key={sweepKey}
          className={`hero-sweep pointer-events-none absolute inset-0 z-30 bg-gradient-to-r ${theme.sweep}`}
        />
      )}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-32 pb-28 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-36 lg:pb-32">
        <div className="perspective-[1200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={slide.id} custom={direction} {...textVariants}>
              <motion.span
                variants={reduceMotion ? undefined : contentItem}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-4 py-1.5 text-xs font-semibold text-orange-700 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                {slide.badge}
              </motion.span>

              <motion.h1
                variants={reduceMotion ? undefined : headlineContainer}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-8 text-4xl leading-[1.15] font-black tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
                style={{ perspective: "1000px" }}
              >
                {slide.headline.map((part) => (
                  <motion.span
                    key={part.text}
                    variants={reduceMotion ? undefined : part.highlight ? highlightItem : headlineItem}
                    className="mr-2 inline-block origin-bottom"
                  >
                    {part.highlight ? (
                      <span className="hero-shimmer-text bg-gradient-to-r from-orange-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                        {part.text}
                      </span>
                    ) : (
                      part.text
                    )}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={reduceMotion ? undefined : contentItem}
                className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600"
              >
                {slide.description}
              </motion.p>

              <motion.div
                variants={reduceMotion ? undefined : contentItem}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href={slide.primaryCta.href}
                  className="group relative overflow-hidden rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-700"
                >
                  <span className="relative z-10">{slide.primaryCta.label}</span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600"
                >
                  {slide.secondaryCta.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-4">
            {heroSlides.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${item.badge} を表示`}
                  aria-current={active ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className="group flex flex-col gap-1.5"
                >
                  <span className="relative block h-1.5 w-12 overflow-hidden rounded-full bg-slate-200/80">
                    {active ? (
                      <>
                        <span className="absolute inset-0 rounded-full bg-orange-200" />
                        {!reduceMotion && !paused ? (
                          <span
                            key={`${activeIndex}-${sweepKey}`}
                            className="hero-slide-progress absolute inset-0 rounded-full bg-orange-500"
                          />
                        ) : (
                          <span className="absolute inset-0 rounded-full bg-orange-500" />
                        )}
                      </>
                    ) : (
                      <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-orange-300 transition-all duration-300 group-hover:w-1/3" />
                    )}
                  </span>
                  <span
                    className={`text-[11px] font-semibold tracking-wider uppercase transition ${
                      active ? "text-orange-600" : "text-slate-400 group-hover:text-orange-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}

            {!reduceMotion && (
              <button
                type="button"
                onClick={nextSlide}
                aria-label="次のスライド"
                className="ml-auto hidden rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:border-orange-200 hover:text-orange-600 sm:inline-flex"
              >
                次へ →
              </button>
            )}
          </div>

        </div>

        <div className="relative min-h-[280px] lg:min-h-[520px]" style={{ perspective: "1400px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${slide.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none text-[8rem] font-black leading-none text-orange-500/10 md:text-[12rem]"
              aria-hidden
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
              {...visualVariants}
            >
              <HeroVisual variant={slide.visual} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="hero-float flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-slate-400 uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-orange-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
