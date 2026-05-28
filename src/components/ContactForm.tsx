"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants";

const serviceOptions = [
  "WEB制作・IT関連事業",
  "新卒採用コンサルティング",
  "業務効率化・システム支援",
  "その他",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold text-slate-900">お問い合わせ先</h2>
        <p className="mt-2 text-sm text-slate-500">{siteConfig.legalName}</p>
        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-xs text-slate-400">メール</dt>
            <dd className="mt-1 text-sm text-slate-800">{siteConfig.email}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">電話</dt>
            <dd className="mt-1 text-sm text-slate-800">{siteConfig.phone}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">FAX</dt>
            <dd className="mt-1 text-sm text-slate-800">{siteConfig.fax}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">受付時間</dt>
            <dd className="mt-1 text-sm text-slate-800">{siteConfig.hours}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-400">所在地</dt>
            <dd className="mt-1 text-sm leading-relaxed text-slate-800">
              {siteConfig.address}
            </dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-3">
        {submitted ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
            <p className="text-xl font-bold text-slate-900">
              お問い合わせありがとうございます
            </p>
            <p className="mt-4 text-sm text-slate-600">
              内容を確認のうえ、担当よりご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="text-sm text-slate-700">
                  会社名
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-sm text-slate-700">
                  お名前
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  placeholder="山田 太郎"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-slate-700">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                placeholder="example@company.co.jp"
              />
            </div>

            <div>
              <label htmlFor="service" className="text-sm text-slate-700">
                ご相談内容
              </label>
              <select
                id="service"
                required
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
              >
                <option value="">選択してください</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-slate-700">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                placeholder="ご相談内容をお書きください"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 py-4 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              送信する
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
