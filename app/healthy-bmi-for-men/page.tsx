import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "Healthy BMI for Men: What It Means",
  description:
    "Explore the healthy BMI range for men, how body composition affects interpretation, and why BMI should be used with context.",
  alternates: {
    canonical: "/healthy-bmi-for-men",
  },
  openGraph: {
    title: "Healthy BMI for Men: What It Means",
    description:
      "Understand the healthy BMI range for men and how it fits into broader health assessment.",
    url: "https://bmi-calculator.com/healthy-bmi-for-men",
    type: "article",
  },
};

export default function HealthyBMIMenPage() {
  return (
    <ArticlePageShell
      title="Healthy BMI for Men: What It Means"
      description="For men, a BMI between 18.5 and 24.9 is generally viewed as a healthy range, though muscle mass and body composition can influence the result."
      imageSrc="/third.png"
      imageAlt="Illustration for healthy BMI for men"
      intro="Men often have higher lean muscle mass than women, which can make BMI appear less precise in some cases. That is why BMI should be used as one part of a broader wellness assessment."
      keywords={["healthy BMI for men", "BMI range men", "man BMI", "healthy weight men", "BMI recommendations"]}
      canonicalPath="/healthy-bmi-for-men"
      relatedLinks={[
        { href: "/healthy-bmi-for-women", label: "Healthy BMI for Women" },
        { href: "/bmi-chart", label: "BMI Chart Explained" },
        { href: "/how-to-improve-bmi", label: "How to Improve Your BMI" },
      ]}
      sections={[
        {
          heading: "The standard healthy BMI range",
          paragraphs: [
            "Like women, adult men are often considered to fall in a healthy BMI range when their score is between 18.5 and 24.9. This range is a widely accepted benchmark, though it should not be treated as an absolute truth for every person."
          ],
        },
        {
          heading: "Why muscle mass matters",
          paragraphs: [
            "Men often have greater muscle mass, especially if they lift weights or do regular strength training. Since muscle weighs more than fat per volume, BMI can sometimes overestimate body fat in muscular individuals."
          ],
        },
        {
          heading: "What to combine with BMI",
          paragraphs: [
            "A more complete picture often includes waist measurement, sleep habits, blood pressure, and diet quality. Used together, these indicators offer better guidance for improving health and reducing risk."
          ],
        },
      ]}
    />
  );
}
