import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slides | Claude Code Helsinki",
};

export default function SlidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      {children}
    </div>
  );
}
