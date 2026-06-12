import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "BMI by Age: Why It Changes Across Life Stages",
  description:
    "Learn how BMI is interpreted differently by age, why children and older adults need different context, and how to use BMI responsibly.",
  alternates: {
    canonical: "/bmi-by-age",
  },
  openGraph: {
    title: "BMI by Age: Why It Changes Across Life Stages",
    description:
      "See how BMI ranges and interpretation differ by age, from children to older adults.",
    url: "https://bmi-calculator.com/bmi-by-age",
    type: "article",
  },
};

export default function BMIAgePage() {
  return (
    <ArticlePageShell
      title="BMI by Age: Why It Changes Across Life Stages"
      description="BMI ranges are usually discussed for adults, but age changes how the information should be interpreted, especially for children, teens, and older adults."
      imageSrc="/fourth.png"
      imageAlt="Illustration for BMI by age"
      intro="A person’s body composition changes over time, so the same BMI number may mean different things depending on life stage, developmental stage, and fitness level."
      keywords={["BMI by age", "BMI age chart", "children BMI", "older adults BMI", "healthy weight by age"]}
      canonicalPath="/bmi-by-age"
      relatedLinks={[
        { href: "/what-is-bmi", label: "What Is BMI?" },
        { href: "/bmi-chart", label: "BMI Chart Explained" },
        { href: "/why-bmi-matters", label: "Why BMI Matters" },
      ]}
      sections={[
        {
          heading: "Why age matters",
          paragraphs: [
            "Children and teenagers are still growing, so their BMI is usually interpreted with growth charts and percentiles instead of the adult ranges. In contrast, adult BMI uses fixed categories that are more straightforward for screening." 
          ],
        },
        {
          heading: "Children and teens",
          paragraphs: [
            "For younger people, the goal is often to assess where they fall compared with peers of the same age and sex. This is why pediatric BMI is tied to growth percentile charts rather than the same simple adult thresholds."
          ],
        },
        {
          heading: "Older adults",
          paragraphs: [
            "As people age, muscle mass may decline and body fat may increase even when weight stays stable. BMI can still be useful, but it can also become less precise for older adults because it does not fully capture body composition changes."
          ],
        },
      ]}
    />
  );
}
