import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "Limitations of BMI: What BMI Does and Does Not Measure",
  description:
    "Understand the limitations of BMI, why it can be misleading for athletes or older adults, and how to interpret results responsibly.",
  alternates: {
    canonical: "/bmi-limitations",
  },
  openGraph: {
    title: "Limitations of BMI: What BMI Does and Does Not Measure",
    description:
      "Learn why BMI is a helpful screening tool but not a complete health assessment.",
    url: "https://bmi-calculator.com/bmi-limitations",
    type: "article",
  },
};

export default function BMILimitationsPage() {
  return (
    <ArticlePageShell
      title="Limitations of BMI: What BMI Does and Does Not Measure"
      description="BMI is useful, but it does not directly measure body fat or body composition, which means it can be misleading in some situations."
      imageSrc="/fifth.png"
      imageAlt="Illustration for limitations of BMI"
      intro="To make informed decisions about health, BMI should be combined with other measures and personalized context rather than treated as a single truth."
      keywords={["limitations of BMI", "BMI accuracy", "BMI vs body fat", "BMI limitations", "health screening"]}
      canonicalPath="/bmi-limitations"
      relatedLinks={[
        { href: "/what-is-bmi", label: "What Is BMI?" },
        { href: "/healthy-bmi-for-women", label: "Healthy BMI for Women" },
        { href: "/why-bmi-matters", label: "Why BMI Matters" },
      ]}
      sections={[
        {
          heading: "Why BMI can be misleading",
          paragraphs: [
            "BMI uses only height and weight, so it cannot tell how much of the body is fat, muscle, or bone. Two people with the same BMI may look very different and have very different health risks."
          ],
          bullets: ["Does not measure body fat directly", "Can overestimate body fat in muscular people", "Can underestimate risk in some older adults"],
        },
        {
          heading: "Who should use extra caution",
          paragraphs: [
            "Athletes, bodybuilders, older adults, pregnant women, and people with significant muscle mass can get BMI results that are less meaningful. In those cases, waist circumference, body composition testing, and clinical advice can provide a more complete picture."
          ],
        },
        {
          heading: "How to use BMI wisely",
          paragraphs: [
            "BMI works best as a screening tool rather than a standalone diagnosis. It is most useful when combined with other relevant indicators and discussed in the context of a person’s lifestyle, medical history, and goals."
          ],
        },
      ]}
    />
  );
}
