import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/constants";

const serviceOptions = new Set([
  "WEB制作・IT関連事業",
  "新卒採用コンサルティング",
  "業務効率化・システム支援",
  "その他",
]);

type ContactPayload = {
  company?: string;
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 },
    );
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const company = body.company?.trim() ?? "";
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!company || !name || !email || !service || !message) {
    return NextResponse.json(
      { error: "必須項目をすべて入力してください。" },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 },
    );
  }

  if (!serviceOptions.has(service)) {
    return NextResponse.json(
      { error: "ご相談内容を選択してください。" },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "お問い合わせ内容は5000文字以内で入力してください。" },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    `${siteConfig.legalName} <onboarding@resend.dev>`;

  const subject = `【お問い合わせ】${service} - ${company} ${name} 様`;
  const html = `
    <h2>Webサイトからお問い合わせがありました</h2>
    <table cellpadding="8" style="border-collapse:collapse;">
      <tr><td><strong>会社名</strong></td><td>${escapeHtml(company)}</td></tr>
      <tr><td><strong>お名前</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>メール</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>ご相談内容</strong></td><td>${escapeHtml(service)}</td></tr>
    </table>
    <h3>お問い合わせ内容</h3>
    <pre style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(message)}</pre>
  `;

  const text = [
    "Webサイトからお問い合わせがありました",
    "",
    `会社名: ${company}`,
    `お名前: ${name}`,
    `メール: ${email}`,
    `ご相談内容: ${service}`,
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
