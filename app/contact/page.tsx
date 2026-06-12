import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BMI Calculator for questions, feedback, or collaboration inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-gray-900">Contact Us</h1>
        <p className="mt-4 text-base leading-8 text-gray-700">
          If you have questions about the BMI calculator, article content, or want to suggest improvements, feel free to reach out through your preferred contact method.
        </p>
        <p className="mt-6 text-base leading-8 text-gray-700">
          For now, this page acts as a simple contact destination for your website and can be connected to your email, form service, or CRM later.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold text-black underline">
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
