import Link from "next/link";
import type { NewsItem } from "@/lib/constants";

const categoryStyles: Record<NewsItem["category"], string> = {
  お知らせ: "border-orange-200 bg-orange-50 text-orange-700",
  WEB制作: "border-blue-200 bg-blue-50 text-blue-700",
  採用: "border-rose-200 bg-rose-50 text-rose-700",
  イベント: "border-amber-200 bg-amber-50 text-amber-700",
};

type NewsListItemProps = {
  item: NewsItem;
};

export function NewsListItem({ item }: NewsListItemProps) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="group flex flex-col gap-3 border-b border-slate-100 py-5 transition last:border-b-0 sm:flex-row sm:items-center sm:gap-6 sm:py-6"
    >
      <div className="flex shrink-0 items-center gap-3 sm:w-44">
        <time dateTime={item.dateIso} className="text-sm tabular-nums text-slate-500">
          {item.date}
        </time>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${categoryStyles[item.category]}`}
        >
          {item.category}
        </span>
      </div>
      <p className="min-w-0 flex-1 text-base font-semibold text-slate-900 transition group-hover:text-orange-600 sm:text-lg">
        {item.title}
      </p>
      <span
        aria-hidden
        className="hidden shrink-0 text-orange-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 sm:inline"
      >
        →
      </span>
    </Link>
  );
}
