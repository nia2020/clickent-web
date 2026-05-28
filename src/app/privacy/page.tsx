import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Privacy Policy"
        title="プライバシーポリシー"
        description="当社は、お客様の個人情報の保護を重要な責務と考え、以下の方針に基づき適切に取り扱います。"
        visual="network"
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-none space-y-8 text-sm leading-relaxed text-slate-600">
              <div>
                <h2 className="text-lg font-bold text-slate-900">1. 個人情報の取得</h2>
                <p className="mt-3">
                  当社は、お問い合わせフォーム等を通じて、会社名、氏名、メールアドレス、電話番号等の個人情報を取得することがあります。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">2. 利用目的</h2>
                <p className="mt-3">
                  取得した個人情報は、お問い合わせへの対応、サービスの提供、ご案内の送付、サービス改善のために利用します。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">3. 第三者提供</h2>
                <p className="mt-3">
                  当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">4. 安全管理</h2>
                <p className="mt-3">
                  当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">5. お問い合わせ</h2>
                <p className="mt-3">
                  個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
