import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "BMI Formula Explained: How to Calculate BMI",
  description:
    "Learn the BMI formula in metric and imperial units, see how the calculation works, and understand how to use the result correctly.",
  alternates: {
    canonical: "/bmi-formula",
  },
  openGraph: {
    title: "BMI Formula Explained: How to Calculate BMI",
    description:
      "See the BMI formula in metric and imperial units and understand how the calculation is done.",
    url: "https://mybmicalculator.vercel.app/bmi-formula",
    type: "article",
  },
};

export default function BMIFormulaPage() {
  return (
    <ArticlePageShell
      title="BMI Formula Explained: How to Calculate BMI"
      description="The BMI formula is a straightforward calculation that uses height and weight to estimate whether a person’s body weight is in a healthy range for their size."
      imageSrc="/seventh.png"
      imageAlt="Illustration for BMI formula explained"
      intro="Although BMI is simple, understanding the formula helps people see why the result can change quickly when height or weight changes."
      keywords={["BMI formula", "how to calculate BMI", "BMI equation", "metric BMI formula", "imperial BMI formula"]}
      canonicalPath="/bmi-formula"
      relatedLinks={[
        { href: "/what-is-bmi", label: "What Is BMI?" },
        { href: "/bmi-chart", label: "BMI Chart Explained" },
        { href: "/bmi-limitations", label: "Limitations of BMI" },
      ]}
      sections={[
        {
          heading: "The metric formula",
          paragraphs: [
            "In metric units, BMI is calculated by dividing weight in kilograms by height in meters squared. This makes it easy to compute quickly and compare against standard reporting ranges."
          ],
          bullets: ["BMI = weight (kg) ÷ height² (m²)"],
        },
        {
          heading: "The imperial formula",
          paragraphs: [
            "In imperial units, the formula uses pounds and inches and multiplies the result by 703. This version is commonly used in the United States and helps make the same BMI concept accessible in everyday measurements."
          ],
          bullets: ["BMI = 703 × weight (lb) ÷ height² (in²)"],
        },
        {
          heading: "Why the formula matters",
          paragraphs: [
            "Understanding the formula helps people see that BMI is based on proportion rather than raw weight. A taller person may weigh more yet still have a lower BMI than someone shorter with the same weight."
          ],
        },
      ]}
    />
  );
}
