"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { AuroraBackground } from "@/components/aurora/AuroraBackground";

const ROLE_OPTIONS: Record<string, string> = {
  developer: "Software Developer",
  designer: "Designer",
  product: "Product Manager",
  founder: "Founder / Entrepreneur",
  student: "Student",
  researcher: "Researcher",
  other: "Other",
};

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    role: "",
    interests: "",
    newsletter: true,
    guidelines: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          github: formData.github || undefined,
          role: ROLE_OPTIONS[formData.role] || "Other",
          interests: formData.interests,
          newsletter: formData.newsletter,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit request. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.role && formData.guidelines;

  return (
    <>
      <AuroraBackground intensity="subtle">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-claude-text dark:text-white mb-4">
                Join the Community
              </h1>
              <p className="text-claude-text/60 dark:text-white/60 text-lg">
                Get notified about upcoming events and connect with fellow
                Claude enthusiasts in Helsinki.
              </p>
            </div>

            {/* Success Message */}
            {status === "success" && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-xl mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                      Request Submitted
                    </h3>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Your request is now pending review. You&apos;ll receive a welcome email once approved. Thank you for joining Claude Code Helsinki!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-xl mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                      Submission Failed
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-terminal-bg rounded-xl shadow-lg p-8 border border-claude-text/5 dark:border-white/10"
            >
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-claude-text dark:text-white mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 dark:border-white/20 bg-white dark:bg-claude-dark focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors text-claude-text dark:text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-claude-text dark:text-white mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 dark:border-white/20 bg-white dark:bg-claude-dark focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors text-claude-text dark:text-white"
                  placeholder="your@email.com"
                />
                <p className="mt-1 text-xs text-claude-text/50 dark:text-white/50">
                  Your email will only be visible to community organizers
                </p>
              </div>

              {/* GitHub */}
              <div className="mb-6">
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-claude-text dark:text-white mb-2"
                >
                  GitHub Username (optional)
                </label>
                <input
                  type="text"
                  id="github"
                  value={formData.github}
                  onChange={(e) =>
                    setFormData({ ...formData, github: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 dark:border-white/20 bg-white dark:bg-claude-dark focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors text-claude-text dark:text-white"
                  placeholder="your-github-username"
                />
              </div>

              {/* Role */}
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-claude-text dark:text-white mb-2"
                >
                  What best describes you? *
                </label>
                <select
                  id="role"
                  required
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 dark:border-white/20 focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors bg-white dark:bg-claude-dark text-claude-text dark:text-white"
                >
                  <option value="">Select an option</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">Designer</option>
                  <option value="product">Product Manager</option>
                  <option value="founder">Founder / Entrepreneur</option>
                  <option value="student">Student</option>
                  <option value="researcher">Researcher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Interests */}
              <div className="mb-6">
                <label
                  htmlFor="interests"
                  className="block text-sm font-medium text-claude-text dark:text-white mb-2"
                >
                  What are you interested in? (optional)
                </label>
                <textarea
                  id="interests"
                  value={formData.interests}
                  onChange={(e) =>
                    setFormData({ ...formData, interests: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 dark:border-white/20 bg-white dark:bg-claude-dark focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors resize-none text-claude-text dark:text-white"
                  placeholder="AI-assisted coding, prompt engineering, Claude API..."
                />
              </div>

              {/* Newsletter */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData({ ...formData, newsletter: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 rounded border-claude-text/20 text-claude-coral focus:ring-claude-coral"
                  />
                  <span className="text-sm text-claude-text/70 dark:text-white/70">
                    I want to receive email updates about upcoming events and
                    community news
                  </span>
                </label>
              </div>

              {/* Guidelines */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.guidelines}
                    onChange={(e) =>
                      setFormData({ ...formData, guidelines: e.target.checked })
                    }
                    className="mt-1 w-5 h-5 rounded border-claude-text/20 text-claude-coral focus:ring-claude-coral"
                  />
                  <span className="text-sm text-claude-text/70 dark:text-white/70">
                    I have read and agree to follow the{" "}
                    <Link
                      href="/guidelines"
                      target="_blank"
                      className="text-claude-coral hover:text-claude-coral-dark underline"
                    >
                      community guidelines
                    </Link>{" "}
                    *
                  </span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid || status === "submitting" || status === "success"}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : status === "success" ? (
                  "Submitted"
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
}
