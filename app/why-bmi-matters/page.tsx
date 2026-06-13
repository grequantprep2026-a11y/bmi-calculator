import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "Why BMI Matters: What Your Score Can Tell You",
  description:
    "Learn why BMI matters for health screening, what it can signal about risk, and how to use it as a practical starting point.",
  alternates: {
    canonical: "/why-bmi-matters",
  },
  openGraph: {
    title: "Why BMI Matters: What Your Score Can Tell You",
    description:
      "Understand the reasons BMI matters and how it connects to long-term health risks.",
    url: "https://mybmicalculator.vercel.app/why-bmi-matters",
    type: "article",
  },
};

export default function WhyBMIMattersPage() {
  return (
    <ArticlePageShell
      title="Why BMI Matters: What Your Score Can Tell You"
      description="BMI matters because it offers a simple way to assess whether body weight might be too low, too high, or within a generally healthy range for a person’s height."
      imageSrc="/seventh.png"
      imageAlt="Illustration for why BMI matters"
      intro="Although BMI has limits, it remains a practical screening tool because it can flag potential health issues early and encourage better conversations around nutrition, movement, and screening."
      keywords={["why BMI matters", "BMI health risk", "BMI importance", "BMI health screening", "weight and health"]}
      canonicalPath="/why-bmi-matters"
      relatedLinks={[
        { href: "/what-is-bmi", label: "What Is BMI?" },
        { href: "/bmi-limitations", label: "Limitations of BMI" },
        { href: "/how-to-improve-bmi", label: "How to Improve Your BMI" },
      ]}
      sections={[
        {
          heading: "What BMI can signal",
          paragraphs: [
            "A BMI that is too low or too high can sometimes indicate increased health risks. For example, very low BMI may be linked to poor nutrition and reduced energy reserves, while higher BMI can be associated with conditions such as heart disease, sleep problems, and type 2 diabetes."
          ],
        },
        {
          heading: "Why it still matters in public health",
          paragraphs: [
            "BMI is widely used because it is inexpensive, easy to calculate, and useful for tracking trends across large groups. It helps health professionals identify patterns and support prevention efforts at scale."
          ],
        },
        {
          heading: "How to interpret it well",
          paragraphs: [
            "BMI should be interpreted as one signal among many. Used alongside diet, exercise, sleep, stress, blood pressure, and medical advice, it becomes much more meaningful and actionable."
          ],
        },
      ]}
    />
  );
}
