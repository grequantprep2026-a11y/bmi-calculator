import type { Metadata } from "next";
import ArticlePageShell from "../comp/ArticlePageShell";

export const metadata: Metadata = {
  title: "What Is BMI? A Simple Guide to Body Mass Index",
  description:
    "Learn what BMI means, how it is calculated, and how to interpret BMI results for adults and healthy weight planning.",
  alternates: {
    canonical: "/what-is-bmi",
  },
  openGraph: {
    title: "What Is BMI? A Simple Guide to Body Mass Index",
    description:
      "Understand BMI, how it works, and how the numbers relate to healthy body weight ranges.",
    url: "https://bmi-calculator.com/what-is-bmi",
    type: "article",
  },
};

export default function WhatIsBMIPage() {
  return (
    <ArticlePageShell
      title="What Is BMI? A Simple Guide to Body Mass Index"
      description="BMI, or Body Mass Index, is a fast screening tool used to estimate whether a person’s weight is in a healthy range for their height."
      imageSrc="/first.png"
      imageAlt="Illustration for understanding BMI"
      intro="It is widely used by doctors, health professionals, and wellness websites because it offers a simple way to start conversations about health, weight, and risk factors."
      keywords={["BMI explained", "what is BMI", "body mass index", "BMI meaning", "healthy weight"]}
      canonicalPath="/what-is-bmi"
      relatedLinks={[
        { href: "/healthy-bmi-for-women", label: "Healthy BMI for Women" },
        { href: "/bmi-formula", label: "BMI Formula Explained" },
        { href: "/why-bmi-matters", label: "Why BMI Matters" },
      ]}
      sections={[
        {
          heading: "What BMI measures",
          paragraphs: [
            "BMI is a screening metric that compares a person’s weight with their height. It is not a perfect measure of body composition, but it gives a useful starting point for identifying potential weight-related health concerns.",
            "Because it uses only two inputs, BMI is easy to calculate and easy to compare across large populations. That is why it is commonly used in public health screening, clinical assessments, and fitness planning."
          ],
          bullets: ["Simple and fast to calculate", "Useful for population health trends", "Often used as a starting point for further assessment"],
        },
        {
          heading: "How BMI is calculated",
          paragraphs: [
            "The general formula for BMI is weight in kilograms divided by height in meters squared. In imperial units, the formula becomes 703 times weight in pounds divided by height in inches squared.",
            "This means two people with the same height but different body weights will have different BMI values, and those values can be compared to common ranges to estimate whether the weight is higher or lower than a healthy benchmark."
          ],
          bullets: ["Metric formula: BMI = kg ÷ m²", "Imperial formula: BMI = 703 × lb ÷ in²"],
        },
        {
          heading: "How to read BMI ranges",
          paragraphs: [
            "For adults, BMI is usually grouped into categories such as underweight, normal, overweight, and obese. A BMI between 18.5 and 24.9 is commonly viewed as the healthy range, while below 18.5 is underweight and 25 or above suggests higher body weight relative to height.",
            "These categories can help individuals better understand whether they fall within a typical range, but it is important to remember that BMI does not directly measure body fat or muscle mass."
          ],
        },
        {
          heading: "Why BMI is still useful",
          paragraphs: [
            "Even with its limits, BMI remains a practical tool because it can quickly flag when someone may need a deeper health evaluation. It is especially useful for screening large groups of people, monitoring population trends, and encouraging healthier lifestyle conversations."
          ],
        },
      ]}
    />
  );
}
