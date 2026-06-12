import Image from "next/image";
import Link from "next/link";

interface SectionContent {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface ArticlePageShellProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
  sections: SectionContent[];
  keywords: string[];
  canonicalPath: string;
  relatedLinks: Array<{ href: string; label: string }>;
}

export default function ArticlePageShell({
  title,
  description,
  imageSrc,
  imageAlt,
  intro,
  sections,
  keywords,
  canonicalPath,
  relatedLinks,
}: ArticlePageShellProps) {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <article className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="font-medium text-gray-700 hover:text-black">
              Home
            </Link>
            <span>/</span>
            <span>Articles</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                BMI Guide
              </p>
              <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">{description}</p>
              <p className="mt-4 text-base leading-8 text-gray-700">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.7fr]">
          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-gray-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-gray-700">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">Related Articles</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {relatedLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-black">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-black p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold">Use the calculator</h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Calculate your BMI instantly and compare the result with the healthy ranges explained on this page.
              </p>
              <Link href="/#calculator" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                Open Calculator
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            image: imageSrc,
            url: `https://bmi-calculator.com${canonicalPath}`,
            keywords: keywords.join(", "),
            author: {
              "@type": "Organization",
              name: "BMI Calculator",
            },
            publisher: {
              "@type": "Organization",
              name: "BMI Calculator",
            },
          }),
        }}
      />
    </main>
  );
}
