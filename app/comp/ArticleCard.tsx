import Image from "next/image";

interface ArticleCardProps {
  number: number;
  title: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  href: string;
  reverse?: boolean;
  schema?: object;
}

export default function ArticleCard({
  number,
  title,
  description,
  imageAlt,
  imageSrc,
  href,
  reverse = false,
  schema,
}: ArticleCardProps) {
  return (
    <article
      className={`article-card flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-10 items-center bg-white rounded-2xl p-6 md:p-8 border border-gray-100`}
      itemScope
      itemType="https://schema.org/Article"
    >
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Image */}
      <div className="w-full md:w-48 shrink-0">
        <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-gray-100 to-gray-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <span className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-2 block">
          0{number}
        </span>
        <h2
          className="text-xl font-bold text-gray-900 mb-2 leading-snug"
          itemProp="headline"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-4" itemProp="description">
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:gap-3 transition-all group"
          itemProp="url"
        >
          Read more
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}