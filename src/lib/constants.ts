export const siteConfig = {
  name: "clickent.",
  legalName: "クリックエンターテイメント株式会社",
  tagline: "ネットワークは人々を繋げる",
  description:
    "業務効率化システムの考案・開発と採用活動の支援。中小企業に“自立した採用活動”を。人と企業の未来を考える『ネクストリクルーティング・システム（NRS）』で、より一層人々を繋げる会社を目指しています。",
  email: "info@clickent.co.jp",
  phone: "092-292-7403",
  fax: "092-292-7406",
  address: "〒812-0022 福岡県福岡市博多区神屋町5-5 カナエ福岡第2ビル 5F",
  mapQuery: "福岡県福岡市博多区神屋町5-5 カナエ福岡第2ビル 5F",
  hours: "平日 10:00〜17:00",
  established: "2014年12月19日",
  representative: "代表取締役 澤田 聖士",
  url: "https://clickent.co.jp",
};

export const companyInfo = [
  { label: "社名", value: "クリックエンターテイメント株式会社（clickent.）" },
  { label: "設立", value: "2014年12月19日" },
  { label: "所在地", value: "〒812-0022 福岡県福岡市博多区神屋町5-5 カナエ福岡第2ビル 5F" },
  { label: "TEL / FAX", value: "092-292-7403 / 092-292-7406" },
  { label: "営業時間", value: "平日 10:00〜17:00" },
  { label: "代表者", value: "代表取締役 澤田 聖士" },
  {
    label: "事業内容",
    value: "新卒採用コンサルティング / WEB制作 / 業務効率化・システム開発",
  },
  { label: "関連会社", value: "スタートアップポップコーン株式会社（STP!! inc）" },
  { label: "許認可", value: "有料職業紹介事業 許可番号 40-ユ-301478" },
  { label: "メール", value: "info@clickent.co.jp" },
];

export const navLinks = [
  { href: "/services/web", label: "WEB制作" },
  { href: "/services/recruitment", label: "新卒採用コンサル" },
  { href: "/services/backoffice", label: "業務効率化" },
  { href: "/works", label: "制作・運用実績" },
  { href: "/about", label: "会社案内" },
];

export const services = [
  {
    id: "web",
    href: "/services/web",
    number: "01",
    title: "WEB制作・IT関連事業",
    subtitle: "IT-Related Business",
    description:
      "あらゆる業種・職種に合わせて、企業様独自のオリジナルシステムの開発やコーポレートサイトの制作を行っています。業務効率化システムの考案・開発も対応しています。",
    features: ["コーポレートサイト", "採用サイト", "システム開発", "業務効率化"],
    accent: "from-orange-500 to-amber-400",
  },
  {
    id: "recruitment",
    href: "/services/recruitment",
    number: "02",
    title: "新卒採用コンサルティング",
    subtitle: "Recruit Consulting",
    description:
      "採用ツールに依存せず、採用活動を成功させるノウハウに基づき、仕組みづくりから研修まですべてをサポート。NRS（ネクストリクルーティング・システム）で“自立した採用活動”を実現します。",
    features: ["NRS導入", "採用仕組みづくり", "研修・面接支援", "求人動画制作"],
    accent: "from-orange-600 to-rose-400",
  },
  {
    id: "backoffice",
    href: "/services/backoffice",
    number: "03",
    title: "業務効率化・システム支援",
    subtitle: "Business Efficiency",
    description:
      "業務効率化システムの考案・開発を通じて、バックオフィス業務の負担を軽減。経理・労務・総務の効率化から、採用関連事務の仕組み化まで支援します。",
    features: ["業務効率化システム", "経理・労務支援", "採用関連事務", "運用サポート"],
    accent: "from-amber-500 to-orange-400",
  },
];

export const stats = [
  { value: "2014", label: "設立年" },
  { value: "NRS", label: "ネクストリクルーティング・システム" },
  { value: "福岡", label: "博多区拠点" },
  { value: "IT×採用", label: "2つの専門性" },
];

export const heroSlides = [
  {
    id: "web",
    badge: "WEB PRODUCTION — 福岡の制作会社",
    headline: [
      { text: "想いを、" },
      { text: "体験に", highlight: true },
      { text: "変える。" },
    ],
    description:
      "コーポレートサイト・採用サイト・LPまで。設計から公開・運用まで、成果にこだわるWEB制作を提供します。",
    primaryCta: { href: "/contact", label: "制作の相談をする" },
    secondaryCta: { href: "/works", label: "制作・運用実績" },
    visual: "browser" as const,
  },
  {
    id: "recruitment",
    badge: "RECRUIT CONSULTING — NRS導入支援",
    headline: [
      { text: "採用を、" },
      { text: "仕組みに", highlight: true },
      { text: "変える。" },
    ],
    description:
      "NRS（ネクストリクルーティング・システム）で“自立した採用活動”を。採用ツールに依存しない、再現性のある採用づくりを支援します。",
    primaryCta: { href: "/services/recruitment", label: "採用支援について" },
    secondaryCta: { href: "/contact", label: "相談する" },
    visual: "recruitment" as const,
  },
  {
    id: "backoffice",
    badge: "BUSINESS EFFICIENCY — バックオフィス支援",
    headline: [
      { text: "業務を、" },
      { text: "スマートに", highlight: true },
      { text: "変える。" },
    ],
    description:
      "業務効率化システムの考案・開発で、バックオフィスの負担を軽減。経理・労務・総務から採用関連事務まで、仕組み化を支援します。",
    primaryCta: { href: "/services/backoffice", label: "効率化について" },
    secondaryCta: { href: "/contact", label: "相談する" },
    visual: "dashboard" as const,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "ヒアリング",
    description: "課題・目標をお伺いし、WEB・採用・業務効率化の観点から最適な支援をご提案します。",
  },
  {
    step: "02",
    title: "戦略・設計",
    description: "NRS導入、サイト制作、システム開発など、全体最適なロードマップを策定します。",
  },
  {
    step: "03",
    title: "実行・制作",
    description: "デザイン、開発、採用施策、研修などをチーム一丸で推進します。",
  },
  {
    step: "04",
    title: "改善・伴走",
    description: "導入後も継続的に改善。長期的なパートナーとして伴走支援します。",
  },
];

export const representativeGreeting = `当社のホームページをご覧いただき、ありがとうございます。

当社は福岡を拠点に、WEB制作、新卒採用のコンサルティング、業務効率化に関するシステム開発を行っております。お客様のご要望を伺いながら、一つひとつ丁寧に対応することを心がけております。

採用やWeb、社内の業務改善など、お困りのことがございましたら、お気軽にご相談ください。

今後とも、どうぞよろしくお願いいたします。`;

export type NewsCategory = "お知らせ" | "WEB制作" | "採用" | "イベント";

export type NewsItem = {
  id: string;
  date: string;
  dateIso: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: "website-renewal-2026",
    date: "2026.05.28",
    dateIso: "2026-05-28",
    category: "お知らせ",
    title: "コーポレートサイトをリニューアルしました",
    excerpt: "コーポレートサイトをリニューアルし、サービス内容や実績をより分かりやすくご案内できるようになりました。",
    body: [
      "平素よりクリックエンターテイメント株式会社をご愛顧いただき、誠にありがとうございます。",
      "この度、コーポレートサイトをリニューアルいたしました。WEB制作・新卒採用コンサルティング・業務効率化の各サービス内容や、制作・運用実績をより分かりやすくご案内できるよう、デザインと構成を刷新しております。",
      "今後とも、皆さまの課題解決に向けて全力で支援してまいります。引き続きどうぞよろしくお願いいたします。",
    ],
  },
  {
    id: "startuppopcorn-website-2026",
    date: "2026.03.15",
    dateIso: "2026-03-15",
    category: "WEB制作",
    title: "スタートアップポップコーン株式会社 コーポレートサイトを制作しました",
    excerpt: "関連会社スタートアップポップコーン株式会社のコーポレートサイトを制作・公開しました。",
    body: [
      "スタートアップポップコーン株式会社のコーポレートサイトを制作・公開いたしました。",
      "アントレプレナー教育サービスの魅力や事業内容が伝わるよう、情報設計からデザイン、実装まで一貫して対応しております。",
      "詳細は制作・運用実績ページもあわせてご覧ください。",
    ],
  },
  {
    id: "recruitment-consulting-2026",
    date: "2026.01.10",
    dateIso: "2026-01-10",
    category: "採用",
    title: "新卒採用コンサルティングのご相談を受付中です",
    excerpt: "採用ツールに依存しない“自立した採用活動”の仕組みづくりについて、ご相談を承っております。",
    body: [
      "新卒採用コンサルティングについて、ご相談を受付しております。",
      "採用ツールに依存せず、自社の採用活動を成功させるノウハウに基づき、仕組みづくりから研修、面接支援までトータルでサポートいたします。",
      "採用に関するお悩みがございましたら、お気軽にお問い合わせください。",
    ],
  },
];

export const works = [
  {
    category: "WEB制作",
    title: "スタートアップポップコーン株式会社",
    subtitle: "コーポレートサイト制作",
    description:
      "2020年より提供するアントレプレナー教育サービスの公式サイト。独自教材で起業家を輩出するブランドの魅力を、わかりやすく伝えるWeb体験を企画・制作しました。",
    result: "コーポレートサイト制作・運用",
    year: "2026",
    url: "https://startuppopcorn.jp/",
    thumbnail: "/works/startuppopcorn.jpg",
    featured: true,
  },
  {
    category: "WEB制作",
    title: "M.V.V QUEST",
    subtitle: "AIとMission・Vision・Valueを策定するWebサービス",
    description:
      "AIと対話しながらMission・Vision・Valueを段階的に策定できるWebサービスのランディングページ。クエスト感のあるUIとシェアカード体験で、経営者の「存在意義」を言語化するプロダクトの世界観を表現しました。",
    result: "サービスサイト制作",
    year: "2026",
    url: "https://mvv.popupgeeks.jp/",
    thumbnail: "/works/mvv-quest.jpg",
    featured: true,
  },
  {
    category: "WEB制作",
    title: "コーポレートサイト・採用サイト制作",
    result: "制作・運用実績多数",
    year: "—",
  },
  {
    category: "新卒採用",
    title: "NRS（ネクストリクルーティング・システム）導入支援",
    result: "採用仕組みづくりを支援",
    year: "—",
  },
  {
    category: "IT関連",
    title: "業務効率化システムの考案・開発",
    result: "オリジナルシステム開発",
    year: "—",
  },
  {
    category: "採用支援",
    title: "求人動画制作・就活セミナー",
    result: "採用ブランディング支援",
    year: "—",
  },
];
