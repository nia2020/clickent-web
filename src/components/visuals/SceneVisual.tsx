"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export type SceneVariant =
  | "browser"
  | "recruitment"
  | "dashboard"
  | "network"
  | "works"
  | "contact"
  | "process"
  | "video";

type SceneVisualProps = {
  variant?: SceneVariant;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  showBadges?: boolean;
};

const heights = {
  xs: "h-[136px]",
  sm: "h-[160px]",
  md: "h-[280px]",
  lg: "h-[420px] lg:h-[520px]",
};

function BrowserChrome({ url = "clickent.co.jp" }: { url?: string }) {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(url.slice(0, i));
      if (i >= url.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, [url]);

  return (
    <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
      <div className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <div className="ml-1 flex-1 truncate rounded bg-white px-2 py-1 text-[9px] text-slate-500 shadow-inner">
        {typed}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="ml-0.5 inline-block h-2 w-px bg-orange-500 align-middle"
        />
      </div>
    </div>
  );
}

function FloatingBadge({
  label,
  color,
  x,
  y,
  delay = 0,
  hiddenOnMobile = true,
}: {
  label: string;
  color: string;
  x: number;
  y: number;
  delay?: number;
  hiddenOnMobile?: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring" }}
      className={`hero-float absolute z-20 rounded-full bg-gradient-to-r ${color} px-3 py-1 text-[10px] font-bold text-white shadow-md ${hiddenOnMobile ? "hidden sm:inline-flex" : "inline-flex"}`}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    >
      {label}
    </motion.span>
  );
}

function BrowserScene({ compact }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl shadow-orange-500/10">
      <BrowserChrome />
      <div className="flex-1 space-y-2 p-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "45%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-3 rounded bg-gradient-to-r from-orange-600 to-amber-500"
        />
        {[80, 100, 55, 70].map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="rounded bg-slate-100"
            style={{ width: `${w}%`, height: compact ? 6 : 10 }}
          />
        ))}
        {!compact && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="h-12 rounded bg-slate-100"
          />
        )}
      </div>
    </div>
  );
}

function RecruitmentScene({ compact }: { compact?: boolean }) {
  const candidates = compact ? ["Aさん", "Bさん"] : ["Aさん", "Bさん", "Cさん"];
  return (
    <div
      className={`relative flex h-full flex-col justify-center rounded-xl border border-rose-200/80 bg-gradient-to-br from-rose-50 to-white shadow-lg ${compact ? "p-2.5" : "p-4"}`}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`mx-auto rounded-full bg-gradient-to-r from-orange-600 to-rose-400 font-bold text-white ${compact ? "px-3 py-1 text-[8px]" : "px-4 py-1.5 text-[10px]"}`}
      >
        NRS
      </motion.div>
      <div className={`space-y-2 ${compact ? "mt-2" : "mt-4"}`}>
        {candidates.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-center gap-2 rounded-lg border border-rose-100 bg-white shadow-sm ${compact ? "px-2 py-1.5" : "px-3 py-2"}`}
          >
            <span
              className={`flex items-center justify-center rounded-full bg-rose-100 font-bold text-orange-600 ${compact ? "h-5 w-5 text-[8px]" : "h-6 w-6 text-[9px]"}`}
            >
              {name[0]}
            </span>
            <div className="flex-1">
              <div className="h-1.5 w-3/4 rounded bg-slate-200" />
              {!compact && <div className="mt-1 h-1 w-1/2 rounded bg-slate-100" />}
            </div>
            {!compact && (
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className="text-[8px] font-medium text-orange-500"
              >
                Entry
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DashboardScene({ compact }: { compact?: boolean }) {
  const bars = compact ? [35, 55, 40, 70] : [40, 65, 45, 80, 55];
  return (
    <div
      className={`flex h-full flex-col rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white shadow-lg ${compact ? "p-2.5" : "p-4"}`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-bold text-orange-700 ${compact ? "text-[8px]" : "text-[10px]"}`}>
          Efficiency
        </span>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`rounded-full bg-orange-500 text-white ${compact ? "px-1.5 py-0.5 text-[7px]" : "px-2 py-0.5 text-[8px]"}`}
        >
          -40%
        </motion.span>
      </div>
      <div className={`mt-auto flex items-end justify-between gap-1.5 ${compact ? "h-14 pt-2" : "h-20 pt-4"}`}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="w-full rounded-t bg-gradient-to-t from-orange-500 to-amber-400"
          />
        ))}
      </div>
      {!compact && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[1, 2].map((n) => (
            <div key={n} className="rounded border border-amber-100 bg-white p-2">
              <div className="h-1 w-2/3 rounded bg-amber-200" />
              <div className="mt-1 h-1 w-1/2 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VideoScene({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-xl border border-orange-200/80 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg ${compact ? "p-2" : "p-3"}`}
    >
      <div className="relative flex-1 overflow-hidden rounded-lg bg-black/50">
        <motion.div
          animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-rose-500/20 to-amber-500/30"
        />
        <div className="absolute inset-x-2 top-2 flex gap-1">
          <span className="h-1 w-8 rounded-full bg-white/30" />
          <span className="h-1 w-4 rounded-full bg-white/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className={`flex items-center justify-center rounded-full bg-white/95 text-orange-600 shadow-lg ${compact ? "h-8 w-8 text-[10px]" : "h-10 w-10 text-xs"}`}
          >
            ▶
          </motion.div>
        </div>
        <div className="absolute right-2 bottom-2 left-2">
          <div className="h-1 overflow-hidden rounded-full bg-white/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "62%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
            />
          </div>
        </div>
      </div>
      {!compact && (
        <div className="mt-2 flex items-center justify-between text-[8px] text-white/70">
          <span>Recruit Movie</span>
          <span>01:24</span>
        </div>
      )}
    </div>
  );
}

function NetworkScene() {
  const nodes = [
    { x: 50, y: 20, label: "HP" },
    { x: 20, y: 60, label: "採用" },
    { x: 80, y: 60, label: "業務" },
    { x: 50, y: 85, label: "NRS" },
  ];
  return (
    <div className="relative h-full rounded-xl border border-orange-200/80 bg-gradient-to-br from-orange-50 to-white p-4 shadow-lg">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <motion.line
          x1="50" y1="20" x2="20" y2="60"
          stroke="#fdba74" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        />
        <motion.line
          x1="50" y1="20" x2="80" y2="60"
          stroke="#fdba74" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        />
        <motion.line
          x1="20" y1="60" x2="50" y2="85"
          stroke="#fb923c" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />
        <motion.line
          x1="80" y1="60" x2="50" y2="85"
          stroke="#fb923c" strokeWidth="0.5"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />
      </svg>
      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring" }}
          className="hero-float absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-orange-300 bg-white text-[8px] font-bold text-orange-600 shadow-md"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  );
}

function WorksScene() {
  const cards = [
    { color: "from-orange-500/20 to-amber-400/20", rotate: -6, x: 0 },
    { color: "from-orange-600/20 to-rose-400/20", rotate: 3, x: 12 },
    { color: "from-amber-500/20 to-orange-400/20", rotate: -2, x: 24 },
  ];
  return (
    <div className="relative flex h-full items-center justify-center">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className={`hero-float-delayed absolute w-3/4 rounded-xl border border-slate-200/80 bg-gradient-to-br ${card.color} p-3 shadow-lg backdrop-blur`}
          style={{ left: card.x, top: i * 16 }}
        >
          <div className="h-2 w-1/2 rounded bg-white/80" />
          <div className="mt-2 h-8 rounded bg-white/60" />
          <div className="mt-2 h-1.5 w-3/4 rounded bg-white/50" />
        </motion.div>
      ))}
    </div>
  );
}

function ContactScene() {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl border border-orange-200/80 bg-gradient-to-br from-orange-50 to-white p-4 shadow-lg">
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="mx-auto w-3/4 rounded-xl border border-slate-200 bg-white p-3 shadow-md"
      >
        <div className="h-2 w-1/3 rounded bg-orange-200" />
        <div className="mt-2 h-6 rounded border border-slate-100 bg-slate-50" />
        <div className="mt-1.5 h-6 rounded border border-slate-100 bg-slate-50" />
        <motion.div
          whileInView={{ scale: [0.9, 1] }}
          viewport={{ once: true }}
          className="mt-2 rounded-full bg-orange-600 py-1.5 text-center text-[8px] font-bold text-white"
        >
          送信
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ x: [0, 6, 0], y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute right-4 top-4 text-lg"
      >
        ✉️
      </motion.div>
    </div>
  );
}

function ProcessScene() {
  const steps = ["ヒアリング", "設計", "制作", "改善"];
  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-xl border border-orange-200/80 bg-gradient-to-br from-slate-50 to-white p-4 shadow-lg">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="flex items-center gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600 text-[8px] font-bold text-white"
          >
            {i + 1}
          </motion.span>
          <div className="flex-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-[10px] font-medium text-slate-700">
            {step}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const badgeSets: Record<SceneVariant, { label: string; color: string; x: number; y: number }[]> = {
  browser: [
    { label: "Design", color: "from-pink-500 to-rose-400", x: -70, y: -50 },
    { label: "Code", color: "from-orange-500 to-amber-400", x: 80, y: -40 },
  ],
  recruitment: [
    { label: "Entry", color: "from-orange-600 to-rose-400", x: -60, y: -45 },
    { label: "Offer", color: "from-pink-500 to-rose-400", x: 70, y: 50 },
  ],
  dashboard: [
    { label: "Save", color: "from-amber-500 to-orange-400", x: -55, y: -40 },
    { label: "Auto", color: "from-orange-500 to-amber-400", x: 75, y: -30 },
  ],
  network: [
    { label: "Connect", color: "from-orange-500 to-amber-400", x: -50, y: 40 },
  ],
  works: [
    { label: "Case", color: "from-amber-500 to-orange-400", x: 80, y: -50 },
  ],
  contact: [
    { label: "Reply", color: "from-orange-500 to-amber-400", x: -60, y: 45 },
  ],
  process: [
    { label: "Go", color: "from-orange-600 to-amber-400", x: 75, y: -45 },
  ],
  video: [
    { label: "Play", color: "from-orange-500 to-rose-400", x: -55, y: -42 },
    { label: "Share", color: "from-amber-500 to-orange-400", x: 72, y: 48 },
  ],
};

export function SceneVisual({
  variant = "browser",
  size = "md",
  className = "",
  showBadges,
}: SceneVisualProps) {
  const compact = size === "sm" || size === "xs";
  const badgesVisible = showBadges ?? size !== "xs";
  const scenes: Record<SceneVariant, ReactNode> = {
    browser: <BrowserScene compact={compact} />,
    recruitment: <RecruitmentScene compact={compact} />,
    dashboard: <DashboardScene compact={compact} />,
    network: <NetworkScene />,
    works: <WorksScene />,
    contact: <ContactScene />,
    process: <ProcessScene />,
    video: <VideoScene compact={compact} />,
  };

  const insetClass =
    size === "lg" ? "top-6 bottom-0 inset-x-2" : size === "xs" ? "inset-1" : "inset-y-2 inset-x-2";

  return (
    <div className={`relative mx-auto w-full max-w-xl ${heights[size]} ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/15 via-amber-300/5 to-rose-400/15 blur-2xl" />
      {badgesVisible &&
        badgeSets[variant].map((b, i) => (
          <FloatingBadge key={b.label} {...b} delay={0.3 + i * 0.15} hiddenOnMobile={size !== "sm"} />
        ))}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`hero-float-delayed absolute ${insetClass}`}
      >
        {scenes[variant]}
      </motion.div>
    </div>
  );
}
