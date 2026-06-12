import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "Healthy BMI for Women: What the Range Means",
  description:
    "Discover the healthy BMI range for women, what it means in practice, and how to use BMI as one part of a broader health picture.",
  alternates: {
    canonical: "/healthy-bmi-for-women",
  },
  openGraph: {
    title: "Healthy BMI for Women: What the Range Means",
    description:
      "Learn what an ideal BMI range for women looks like and why context matters for health.",
    url: "https://bmi-calculator.com/healthy-bmi-for-women",
    type: "article",
  },
};

export default function HealthyBMIWomenPage() {
  return (
    <ArticlePageShell
      title="Healthy BMI for Women: What the Range Means"
      description="A healthy BMI for women is typically considered to be between 18.5 and 24.9, though individual factors such as age, muscle mass, and body composition matter."
      imageSrc="/second.png"
      imageAlt="Illustration for healthy BMI for women"
      intro="Women often have different body fat distribution and hormonal factors than men, so BMI should be interpreted as one indicator rather than a complete health score."
      keywords={["healthy BMI for women", "BMI range women", "women health", "healthy weight women", "BMI chart women"]}
      canonicalPath="/healthy-bmi-for-women"
      relatedLinks={[
        { href: "/healthy-bmi-for-men", label: "Healthy BMI for Men" },
        { href: "/bmi-by-age", label: "BMI by Age" },
        { href: "/bmi-limitations", label: "Limitations of BMI" },
      ]}
      sections={[
        {
          heading: "What a healthy BMI range means",
          paragraphs: [
            "For adult women, a BMI from 18.5 to 24.9 is often described as a healthy range. This range is a general guideline and does not replace personalized medical advice."
          ],
          bullets: ["Healthy range: 18.5–24.9", "Underweight: below 18.5", "Overweight: 25–29.9"],
        },
        {
          heading: "Why BMI is not the whole story",
          paragraphs: [
            "Women may carry different amounts of fat and muscle at the same BMI compared with men. This means the same number can look different depending on body composition, age, activity level, and overall health."
          ],
        },
        {
          heading: "How to use BMI responsibly",
          paragraphs: [
            "BMI can be a useful checkpoint for women who want to understand if their body weight is within a typical range for their height. For a better picture, it can be paired with waist circumference, blood pressure, diet quality, and physical activity levels."
          ],
        },
      ]}
    />
  );
}
