import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how BMI Calculator handles your privacy and data when you use the site.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-gray-900">Privacy Policy</h1>
        <p className="mt-4 text-base leading-8 text-gray-700">
          This website uses the BMI calculator and educational articles for informational purposes only. No personal health data is stored on this site unless you choose to submit it through a future contact form or other feature.
        </p>
        <p className="mt-4 text-base leading-8 text-gray-700">
          If you contact us, we may receive the information you provide in your message. We use that information only to respond to your request.
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
