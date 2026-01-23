import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

interface JoinRequest {
  id: string;
  name: string;
  email: string;
  role: string;
  interests: string;
  github?: string;
  linkedin?: string;
  x?: string;
  mastodon?: string;
  newsletter: boolean;
  status: "pending" | "approved" | "rejected" | "processed";
  createdAt: string;
  updatedAt: string;
}

function generateId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `jr_${timestamp}${random}`;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, role, interests, github, linkedin, x, mastodon, newsletter } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!role || typeof role !== "string") {
      return NextResponse.json(
        { error: "Role is required" },
        { status: 400 }
      );
    }

    const id = generateId();
    const now = new Date().toISOString();

    const joinRequest: JoinRequest = {
      id,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role: role.trim(),
      interests: interests?.trim() || "",
      github: github?.trim() || undefined,
      linkedin: linkedin?.trim() || undefined,
      x: x?.trim() || undefined,
      mastodon: mastodon?.trim() || undefined,
      newsletter: newsletter === true,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    // Store as JSON blob
    // Note: URLs are public but unguessable. Processed requests are deleted.
    await put(
      `join-requests/${id}.json`,
      JSON.stringify(joinRequest, null, 2),
      { access: "public", contentType: "text/plain" }
    );

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error) {
    console.error("Error processing join request:", error);
    return NextResponse.json(
      { error: "Failed to process join request" },
      { status: 500 }
    );
  }
}
