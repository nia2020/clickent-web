import Image from "next/image";

type WorkThumbnailProps = {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
};

export function WorkThumbnail({ src, alt, url, priority = false }: WorkThumbnailProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-inner">
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        {url && (
          <span className="ml-1 truncate rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </div>
    </div>
  );
}
