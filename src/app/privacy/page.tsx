import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Claude Code Helsinki - how we collect, use, and protect your personal data",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-claude-text/60 dark:text-white/60 text-lg">
            How we collect, use, and protect your personal data
          </p>
          <p className="text-claude-text/40 dark:text-white/40 text-sm mt-2">
            Last updated: February 24, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-claude-coral/5 dark:bg-claude-coral/10 border border-claude-coral/20 p-8 rounded-xl mb-12">
          <p className="text-claude-text/80 dark:text-white/80 leading-relaxed">
            Claude Code Helsinki (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            is committed to protecting your privacy and personal data in
            accordance with the EU General Data Protection Regulation (GDPR) and
            Finnish data protection legislation. This policy explains what data
            we collect, why, and how we handle it.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Data Controller */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              1. Data Controller
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              Claude Code Helsinki is an Anthropic-supported community group. For
              questions about your personal data or this privacy policy, contact
              us through the{" "}
              <Link
                href="/join"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                contact form
              </Link>{" "}
              or speak directly with an organizer at events.
            </p>
          </div>

          {/* What We Collect */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              2. What Data We Collect
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              When you submit a join request, we collect the following personal
              data:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Name and email address</strong> (required)
                  &mdash; to identify you and communicate with you
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Role / profession</strong> (required)
                  &mdash; to understand our community composition
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Interests</strong> (optional)
                  &mdash; to tailor events and content to community needs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Social accounts</strong> (optional)
                  &mdash; GitHub, LinkedIn, X, Mastodon handles to facilitate
                  community connections
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Email communication preference</strong>
                  &mdash; whether you consent to receive event updates and
                  community news
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Basis */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              3. Legal Basis for Processing
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds
              under GDPR Article 6:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Consent (Art. 6(1)(a))</strong>
                  &mdash; for sending email communications about events and
                  community news. You can withdraw consent at any time.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Legitimate interest (Art. 6(1)(f))</strong>
                  &mdash; for managing community membership and organizing
                  events. Our legitimate interest is to run and grow the Claude
                  Code Helsinki community.
                </span>
              </li>
            </ul>
          </div>

          {/* How We Use Data */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              4. How We Use Your Data
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              Your personal data is used for the following purposes:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>Processing and managing your community membership request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>Sending a welcome email upon approval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  Sending event notifications and community updates (only if you
                  opted in)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>Understanding community demographics to plan relevant events</span>
              </li>
            </ul>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mt-4">
              We do not sell, rent, or share your personal data with third
              parties for marketing purposes.
            </p>
          </div>

          {/* Data Storage & Security */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              5. Data Storage and Security
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              Your data is handled as follows:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Pending requests</strong> are
                  temporarily stored in Vercel Blob storage with unguessable
                  URLs. Once processed, these temporary records are deleted.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Approved member data</strong> is
                  stored in a private repository accessible only to community
                  organizers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  All data is transmitted over HTTPS. We use industry-standard
                  security practices to protect your information.
                </span>
              </li>
            </ul>
          </div>

          {/* Data Transfers */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              6. International Data Transfers
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              Our hosting infrastructure (Vercel) may process data in the United
              States and other countries. These transfers are protected by
              appropriate safeguards, including standard contractual clauses
              approved by the European Commission, in accordance with GDPR
              Chapter V.
            </p>
          </div>

          {/* Data Retention */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              7. Data Retention
            </h2>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Pending join requests</strong> are
                  deleted from temporary storage once processed (approved or
                  rejected).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Member data</strong> is retained
                  for as long as you are an active member of the community. You
                  may request deletion at any time.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  If your request is rejected, your data is deleted promptly.
                </span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              8. Your Rights Under GDPR
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right of access</strong> &mdash;
                  request a copy of your personal data we hold
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to rectification</strong>
                  &mdash; request correction of inaccurate data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to erasure</strong> &mdash;
                  request deletion of your data (&quot;right to be
                  forgotten&quot;)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to restrict processing</strong>
                  &mdash; request limitation of how we use your data
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to data portability</strong>
                  &mdash; receive your data in a structured, machine-readable
                  format
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to object</strong> &mdash;
                  object to processing based on legitimate interest
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Right to withdraw consent</strong>
                  &mdash; withdraw your consent for email communications at any
                  time, without affecting the lawfulness of prior processing
                </span>
              </li>
            </ul>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mt-4">
              To exercise any of these rights, contact the community organizers
              through the{" "}
              <Link
                href="/join"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                contact form
              </Link>{" "}
              or at an event. We will respond to your request within 30 days.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              9. Third-Party Services
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed mb-4">
              Our website uses the following third-party services:
            </p>
            <ul className="space-y-2 text-claude-text/70 dark:text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Vercel</strong> &mdash; website
                  hosting and serverless functions. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-claude-coral hover:text-claude-coral-dark"
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-claude-coral mt-1">•</span>
                <span>
                  <strong className="text-claude-text dark:text-white">Luma</strong> &mdash; event
                  calendar embed on our events page. When you interact with the
                  Luma calendar, Luma&apos;s own privacy policy applies. See{" "}
                  <a
                    href="https://lu.ma/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-claude-coral hover:text-claude-coral-dark"
                  >
                    Luma&apos;s Privacy Policy
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              10. Cookies and Local Storage
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              This website uses browser local storage solely to remember your
              theme preference (light or dark mode). We do not use tracking
              cookies or analytics. The Luma calendar embed may set its own
              cookies when loaded &mdash; please refer to Luma&apos;s privacy
              policy for details.
            </p>
          </div>

          {/* Supervisory Authority */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              11. Right to Lodge a Complaint
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              If you believe your data protection rights have been violated, you
              have the right to lodge a complaint with the Finnish Data
              Protection Ombudsman (Tietosuojavaltuutetun toimisto):{" "}
              <a
                href="https://tietosuoja.fi/en/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-coral hover:text-claude-coral-dark"
              >
                tietosuoja.fi
              </a>
              .
            </p>
          </div>

          {/* Changes */}
          <div className="bg-white dark:bg-terminal-bg p-8 rounded-xl shadow-sm border border-claude-text/5 dark:border-white/10">
            <h2 className="text-xl font-bold text-claude-text dark:text-white mb-3">
              12. Changes to This Policy
            </h2>
            <p className="text-claude-text/70 dark:text-white/70 leading-relaxed">
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated &quot;last updated&quot;
              date. For significant changes affecting how we process your data,
              we will notify active members via email.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="btn-primary text-lg px-8 py-4">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
