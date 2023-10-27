import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Lustria, Lato } from "next/font/google";
import { Toaster } from "sonner";

const lustria = Lustria({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lustria",
});
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Newton Mathias | Freelancer",
  description: "Software engineer portfolio",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Hire",
    "Freelancer",
    "FullStack",
    "Remote",
    "Hire Nextjs",
  ],
  authors: [
    {
      name: "Newton",
      url: "https://github.com/newtonmathias",
    },
  ],
  creator: "newtonmathias",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "google-site-verification": "ntrXachBN5U1Q6AZmxx_qfkK6t6BoB3nZlWqdui0at0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lustria.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
