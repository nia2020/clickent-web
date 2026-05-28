import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex" aria-label={`${siteConfig.name} ホーム`}>
              <Image
                src="/clickent-logo.png"
                alt={siteConfig.name}
                width={300}
                height={129}
                unoptimized
                className="h-10 w-auto transition group-hover:opacity-90 md:h-12"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">サービス</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">会社情報</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/news" className="text-sm text-slate-600 transition hover:text-orange-600">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-600 transition hover:text-orange-600">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm text-slate-600 transition hover:text-orange-600">
                  実績
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 transition hover:text-orange-600">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-600 transition hover:text-orange-600">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-xs text-slate-400">
            Copyright(C) Since 2014 {siteConfig.legalName} All Rights Reserved.
          </p>
          <p className="text-xs text-slate-400">{siteConfig.email}</p>
        </div>
      </div>
    </footer>
  );
}
