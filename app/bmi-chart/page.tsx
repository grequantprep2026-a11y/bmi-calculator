import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "BMI Chart Explained: Understand Your BMI Category",
  description:
    "Read a simple explanation of the BMI chart, what each category means, and how to use it to understand your weight status.",
  alternates: {
    canonical: "/bmi-chart",
  },
  openGraph: {
    title: "BMI Chart Explained: Understand Your BMI Category",
    description:
      "Learn how the BMI chart works and what each weight category means for adults.",
    url: "https://mybmicalculator.vercel.app/bmi-chart",
    type: "article",
  },
};

export default function BMIChartPage() {
  return (
    <ArticlePageShell
      title="BMI Chart Explained: Understand Your BMI Category"
      description="The BMI chart groups adult BMI values into categories that help people understand whether their weight is underweight, healthy, overweight, or obese."
      imageSrc="/sixth.png"
      imageAlt="Illustration for BMI chart explained"
      intro="A BMI chart is one of the simplest ways to see where a person’s BMI falls on the standard adult scale and what that may suggest about overall health risk."
      keywords={["BMI chart", "BMI categories", "BMI range chart", "underweight overweight obese", "BMI classification"]}
      canonicalPath="/bmi-chart"
      relatedLinks={[
        { href: "/what-is-bmi", label: "What Is BMI?" },
        { href: "/bmi-formula", label: "BMI Formula Explained" },
        { href: "/bmi-by-age", label: "BMI by Age" },
      ]}
      sections={[
        {
          heading: "How the BMI chart works",
          paragraphs: [
            "Most BMI charts place values into categories such as underweight, normal weight, overweight, obese, and severely obese. These categories are commonly used for adults and offer a quick way to compare results against recognized ranges."
          ],
          bullets: ["Below 18.5: Underweight", "18.5–24.9: Healthy range", "25–29.9: Overweight", "30+: Obese"],
        },
        {
          heading: "Why the chart is useful",
          paragraphs: [
            "A chart can make BMI easier to understand because it turns a number into a clear classification. It can be a helpful visual reference when someone wants to see how their results compare with general categories."
          ],
        },
        {
          heading: "How to use the chart wisely",
          paragraphs: [
            "Although the chart is easy to understand, it should be used as a screening aid rather than a final diagnosis. Lifestyle, age, body composition, and medical history can all change how the result should be interpreted."
          ],
        },
      ]}
    />
  );
}
