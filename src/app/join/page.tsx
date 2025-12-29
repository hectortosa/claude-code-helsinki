"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { AuroraBackground } from "@/components/aurora/AuroraBackground";

// GitHub repo where issues will be created
const GITHUB_REPO = "hectortosa/claude-community-helsinki-website";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    interests: "",
    newsletter: true,
    guidelines: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Build the GitHub issue URL with pre-filled values
    const issueTitle = `Join Request: ${formData.name}`;

    // Map role to match dropdown options in issue template
    const roleMap: Record<string, string> = {
      developer: "Software Developer",
      designer: "Designer",
      product: "Product Manager",
      founder: "Founder / Entrepreneur",
      student: "Student",
      researcher: "Researcher",
      other: "Other",
    };

    // Build query params for issue template
    const params = new URLSearchParams({
      template: "join.yml",
      title: issueTitle,
      name: formData.name,
      email: formData.email,
      role: roleMap[formData.role] || "Other",
      interests: formData.interests,
      "newsletter[]": formData.newsletter
        ? "I want to receive email updates about upcoming events and community news"
        : "",
      "guidelines[]":
        "I have read and agree to follow the [community guidelines](https://claude-community-helsinki.codesharegrow.net/guidelines)",
    });

    // Redirect to GitHub issue creation
    const githubUrl = `https://github.com/${GITHUB_REPO}/issues/new?${params.toString()}`;
    window.open(githubUrl, "_blank");
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
              <h1 className="text-4xl font-bold text-claude-text mb-4">
                Join the Community
              </h1>
              <p className="text-claude-text/60 text-lg">
                Get notified about upcoming events and connect with fellow
                Claude enthusiasts in Helsinki.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-finnish-blue/5 border border-finnish-blue/20 p-6 rounded-xl mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-finnish-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-finnish-blue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-claude-text mb-1">
                    Join via GitHub
                  </h3>
                  <p className="text-sm text-claude-text/60">
                    We use GitHub Issues to manage community requests. Fill out
                    the form below and you&apos;ll be redirected to GitHub to
                    submit your request. A GitHub account is required.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 border border-claude-text/5"
            >
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-claude-text mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-claude-text mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors"
                  placeholder="your@email.com"
                />
                <p className="mt-1 text-xs text-claude-text/50">
                  Your email will only be visible to community organizers
                </p>
              </div>

              {/* Role */}
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-claude-text mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors bg-white"
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
                  className="block text-sm font-medium text-claude-text mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-claude-text/20 focus:border-claude-coral focus:ring-2 focus:ring-claude-coral/20 outline-none transition-colors resize-none"
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
                  <span className="text-sm text-claude-text/70">
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
                  <span className="text-sm text-claude-text/70">
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
                disabled={!isFormValid}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Continue to GitHub
              </button>

              <p className="mt-4 text-center text-sm text-claude-text/50">
                You&apos;ll be redirected to GitHub to submit your join request
              </p>
            </form>

            {/* Direct Link */}
            <div className="mt-8 text-center">
              <p className="text-claude-text/60 text-sm mb-2">
                Or go directly to GitHub:
              </p>
              <a
                href={`https://github.com/${GITHUB_REPO}/issues/new?template=join.yml`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-coral hover:text-claude-coral-dark font-medium"
              >
                Open join request template →
              </a>
            </div>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
}
