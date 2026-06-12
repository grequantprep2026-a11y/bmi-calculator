import type { Metadata } from "next";
import BMICalculator from "./comp/BMICalculator";
import ArticleCard from "./comp/ArticleCard";
import BMIChartTable from "./comp/BMIChartTable";

export const metadata: Metadata = {
  title: "Free BMI Calculator",
  description:
    "Calculate your BMI instantly with our free calculator, explore healthy BMI ranges, and read expert articles about weight and health.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free BMI Calculator",
    description:
      "Calculate your BMI instantly and learn your healthy weight range with trusted health guidance.",
    url: "https://bmi-calculator.com/",
    type: "website",
  },
};

const articles = [
  {
    number: 1,
    title: "What Is BMI?",
    description:
      "Body Mass Index (BMI) is a simple calculation using your height and weight. It helps determine whether your weight is healthy for your height. Widely used by doctors and health experts to screen for weight-related health risks, it's one of the most common tools in preventive healthcare.",
    imageAlt: "What is BMI",
    imageSrc: "/first.png",
    href: "/what-is-bmi",
    reverse: false,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "What Is BMI?",
      description:
        "Body Mass Index (BMI) is a simple calculation using your height and weight to determine if your weight is healthy.",
      mainEntityOfPage: "https://yourdomain.com/what-is-bmi",
    },
  },
  {
    number: 2,
    title: "Healthy BMI for Women",
    description:
      "A healthy BMI for women falls between 18.5 and 24.9. Women may have different body fat percentages than men, so BMI is just one part of the overall health picture. Factors like age, muscle mass, and bone density also play an important role in assessing women's health.",
    imageAlt: "Healthy BMI for Women",
    imageSrc: "/second.png",
    href: "/healthy-bmi-for-women",
    reverse: true,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Healthy BMI for Women",
      description:
        "Learn what a healthy BMI range is for women, how it differs from men, and how to maintain a healthy weight.",
    },
  },
  {
    number: 3,
    title: "Healthy BMI for Men",
    description:
      "For men, a BMI between 18.5 and 24.9 is considered healthy. Maintaining a healthy BMI can lower the risk of heart disease, type 2 diabetes, and other chronic conditions. Men typically carry more lean muscle mass, which can affect how BMI is interpreted.",
    imageAlt: "Healthy BMI for Men",
    imageSrc: "/third.png",
    href: "/healthy-bmi-for-men",
    reverse: false,
  },
  {
    number: 4,
    title: "BMI by Age",
    description:
      "BMI ranges can vary significantly by age. Children, teenagers, adults, and older adults all have different healthy ranges. Check age-specific BMI charts to understand what is healthy for your stage of life. For children, BMI is assessed using growth percentile charts.",
    imageAlt: "BMI by Age",
    imageSrc: "/fourth.png",
    href: "/bmi-by-age",
    reverse: true,
  },
  {
    number: 5,
    title: "Limitations of BMI",
    description:
      "BMI does not measure body fat directly. It may not be accurate for athletes, pregnant women, older adults, or people with high muscle mass. Other important factors include waist circumference, body fat percentage, blood pressure, and cholesterol levels.",
    imageAlt: "Limitations of BMI",
    imageSrc: "/fifth.png",
    href: "/bmi-limitations",
    reverse: false,
  },
  {
    number: 6,
    title: "BMI Chart Explained",
    description:
      "BMI charts help classify your weight status based on your BMI score. The standard chart shows underweight, normal, overweight, obese, and severely obese ranges for adults. Understanding where you fall on the chart is the first step toward better health.",
    imageAlt: "BMI Chart",
    imageSrc: "/images/bmi-chart.png",
    href: "/bmi-chart",
    reverse: true,
    extra: "chart",
  },
  {
    number: 7,
    title: "How to Improve Your BMI",
    description:
      "Improving your BMI involves a balanced approach: eat a nutritious diet, exercise regularly, stay hydrated, and get enough sleep. Small, consistent lifestyle changes add up over time. There is no single solution — sustainable habits are the most effective path to a healthy BMI.",
    imageAlt: "How to Improve BMI",
    imageSrc: "/sixth.png",
    href: "/how-to-improve-bmi",
    reverse: false,
  },
  {
    number: 8,
    title: "BMI Formula Explained",
    description:
      "BMI is calculated by dividing your weight in kilograms by the square of your height in metres (kg/m²). In imperial units, the formula is 703 × weight (lbs) ÷ height (in)². It is a simple yet effective screening tool to assess whether your weight is in a healthy range.",
    imageAlt: "BMI Formula",
    imageSrc: "/images/bmi-formula.png",
    href: "/bmi-formula",
    reverse: true,
    extra: "formula",
  },
  {
    number: 9,
    title: "Why BMI Matters",
    description:
      "BMI helps identify potential health risks early. Being underweight or overweight increases the risk of serious conditions like heart disease, diabetes, high blood pressure, and joint problems. Keeping your BMI in the healthy range is an important step toward a longer, healthier life.",
    imageAlt: "Why BMI Matters",
    imageSrc: "/seventh.png",
    href: "/why-bmi-matters",
    reverse: false,
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BMI Calculator",
            url: "https://bmi-calculator.com",
            description:
              "Free BMI calculator with healthy weight guidance and expert articles about BMI and health.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://bmi-calculator.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      <main id="main-content">
        {/* ── HERO + CALCULATOR ── */}
        <section
          id="calculator"
          className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Free BMI Calculator
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Calculate your Body Mass Index instantly. Metric and imperial supported.
            </p>
          </div>
          <BMICalculator />
        </section>


        {/* ── ARTICLES ── */}
        <section
          id="articles"
          className="max-w-5xl mx-auto px-4 sm:px-6 py-16"
          aria-labelledby="articles-heading"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 block">Learn</span>
            <h2
              id="articles-heading"
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Everything About BMI
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Expert-written guides to help you understand and improve your health.</p>
          </div>

          <div className="space-y-5">
            {articles.map((article) => (
              <div key={article.number}>
                {article.extra === "chart" ? (
                  /* Special BMI Chart article with table inline */
                  <div className="article-card flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-start bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                    <div className="w-full md:w-64 shrink-0">
                      <BMIChartTable />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-2 block">
                        0{article.number}
                      </span>
                      <h2
                        className="text-xl font-bold text-gray-900 mb-2 leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {article.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.description}</p>
                      <a
                        href={article.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:gap-3 transition-all group"
                      >
                        Read more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ) : article.extra === "formula" ? (
                  /* Special Formula article with visual */
                  <div className="article-card flex flex-col md:flex-row-reverse gap-6 md:gap-10 items-center bg-white rounded-2xl p-6 md:p-8 border border-gray-100">
                    <div className="w-full md:w-48 shrink-0">
                      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">BMI Formula</p>
                        <p className="text-lg font-bold text-gray-800 mb-1">BMI =</p>
                        <div className="border-t-2 border-gray-800 pt-2 mt-1">
                          <p className="text-sm font-semibold text-gray-700">Weight (kg)</p>
                          <p className="text-xs text-gray-400 mt-0.5">Height (m)²</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-gray-300 tracking-widest uppercase mb-2 block">
                        0{article.number}
                      </span>
                      <h2
                        className="text-xl font-bold text-gray-900 mb-2 leading-snug"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {article.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.description}</p>
                      <a
                        href={article.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:gap-3 transition-all group"
                      >
                        Read more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ) : (
                  <ArticleCard
                    number={article.number}
                    title={article.title}
                    description={article.description}
                    imageAlt={article.imageAlt}
                    imageSrc={article.imageSrc}
                    href={article.href}
                    reverse={article.reverse}
                    schema={article.schema}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ (SEO) ── */}
        <section
          className="bg-white border-t border-gray-100 py-16"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 block">FAQ</span>
              <h2
                id="faq-heading"
                className="text-3xl font-extrabold text-gray-900"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Common Questions
              </h2>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is a normal BMI for adults?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A normal BMI for adults is between 18.5 and 24.9. Values below 18.5 indicate underweight, 25–29.9 is overweight, 30–34.9 is obese, and 35 or above is severely obese.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How accurate is BMI as a health measure?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "BMI is a useful screening tool but has limitations. It does not account for muscle mass, bone density, age, or sex differences in fat distribution. Athletes and older adults may get misleading results.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I calculate my BMI?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "In metric units: BMI = weight (kg) ÷ height² (m²). In imperial: BMI = 703 × weight (lbs) ÷ height² (inches²). Use our free calculator above for instant results.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is BMI different for men and women?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The standard BMI ranges (18.5–24.9 for normal) apply to both men and women. However, women typically have higher body fat percentages at the same BMI compared to men, which is why some experts recommend gender-specific assessments.",
                      },
                    },
                  ],
                }),
              }}
            />

            <div className="space-y-4">
              {[
                {
                  q: "What is a normal BMI for adults?",
                  a: "A normal BMI for adults is between 18.5 and 24.9. Below 18.5 is underweight, 25–29.9 is overweight, 30–34.9 is obese, and 35 or above is severely obese.",
                },
                {
                  q: "How accurate is BMI as a health measure?",
                  a: "BMI is a useful screening tool but has real limitations. It does not account for muscle mass, bone density, age, or how fat is distributed. Athletes and older adults may get misleading results.",
                },
                {
                  q: "How do I calculate my BMI?",
                  a: "In metric: BMI = weight (kg) ÷ height² (m²). In imperial: BMI = 703 × weight (lbs) ÷ height² (in²). Use our free calculator above for instant results.",
                },
                {
                  q: "Is BMI different for men and women?",
                  a: "The standard BMI ranges apply to both sexes, but women typically carry higher body fat at the same BMI compared to men. Some experts recommend gender-specific assessments for a more accurate picture.",
                },
                {
                  q: "What is a healthy BMI for children?",
                  a: "For children and teenagers (ages 2–19), BMI is assessed using age- and sex-specific growth percentile charts rather than fixed cutoffs. A healthcare provider should interpret children's BMI results.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border border-gray-100 rounded-xl overflow-hidden bg-white"
                >
                  <summary className="flex justify-between items-center px-5 py-4 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors">
                    {item.q}
                    <svg
                      className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  );
}