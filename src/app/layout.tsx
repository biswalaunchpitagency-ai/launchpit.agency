import type { Metadata } from "next";
import "./globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/style.css";
import "@/styles/rmp-menu.css";
import SmoothScroll from "@/lib/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "LaunchPit Agency | Growth Marketing That Actually Scales Your Business",
  description: "From Google/Meta Ads and SEO to social media management and video production, we create cohesive digital strategies to generate consistent leads and sales.",
  icons: {
    icon: "/images/2026/03/favicon.png",
    shortcut: "/images/2026/03/favicon.png",
    apple: "/images/2026/03/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="home wp-singular page-template-default page page-id-8 wp-custom-logo wp-embed-responsive wp-theme-agencytheme singular enable-search-modal missing-post-thumbnail has-no-pagination not-showing-comments show-avatars footer-top-visible">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
