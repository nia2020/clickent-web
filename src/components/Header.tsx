"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/constants";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 ${
        active
          ? "bg-orange-100/90 text-orange-700 shadow-sm shadow-orange-500/10"
          : "text-slate-600 hover:bg-white/80 hover:text-orange-600"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${
          open ? "z-[80]" : "z-50"
        } ${
          scrolled
            ? "border-b border-orange-100/80 bg-white/90 shadow-lg shadow-orange-500/5 backdrop-blur-xl"
            : "border-b border-transparent bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8 lg:py-4">
          <Link href="/" className="group shrink-0" aria-label={`${siteConfig.name} ホーム`}>
            <Image
              src="/clickent-logo.png"
              alt={siteConfig.name}
              width={300}
              height={129}
              priority
              unoptimized
              className="h-11 w-auto transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90 md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-0.5 rounded-full border border-slate-200/70 bg-slate-50/80 p-1 shadow-inner shadow-white/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                <DesktopNavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                お問い合わせ
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
            </Link>
          </nav>

          <button
            type="button"
            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
              open
                ? "border-orange-200 bg-orange-50 text-orange-700"
                : "border-slate-200 bg-white text-slate-700 shadow-sm"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span className="relative h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  open ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="メニューを閉じる"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white px-8 pb-10 pt-24 shadow-2xl shadow-orange-500/10 lg:hidden"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
                Menu
              </p>

              <nav className="mt-8 flex flex-1 flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center gap-4 rounded-2xl px-4 py-4 transition ${
                          active
                            ? "bg-orange-100/80 text-orange-700"
                            : "text-slate-800 hover:bg-orange-50"
                        }`}
                      >
                        <span className="text-[11px] font-bold tracking-widest text-orange-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-semibold">{link.label}</span>
                        <span
                          aria-hidden
                          className="ml-auto text-orange-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25"
                >
                  お問い合わせ
                  <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
