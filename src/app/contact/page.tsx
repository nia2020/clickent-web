import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { ContactVisual } from "@/components/ContactVisual";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="お問い合わせ"
        description="WEB制作・新卒採用コンサル（NRS）・業務効率化に関するご相談、お見積りはこちらから。"
        visual="contact"
      />

      <section className="bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <FadeIn className="hidden lg:col-span-2 lg:block">
              <ContactVisual />
            </FadeIn>
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
