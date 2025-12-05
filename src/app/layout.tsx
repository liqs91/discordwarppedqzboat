
import "./globals.css";
import { Inter } from "next/font/google";
import GoogleAnalyticsProvider from "@/components/GoogleAnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discord Wrapped: Discover Your Year in Discord",
  description: "Explore your top Discord moments with Discord Wrapped. Relive your favorite messages, servers, and conversations from the past year. Join the journey of your Discord memories today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
          <link rel="canonical" href="https://discordwarpped.qzboat.com/" />
        
      </head>
      
      <body className={`${inter.className} w-screen min-h-screen`}>
        <GoogleAnalyticsProvider />
        {children}

        
<script defer data-domain="discordwarpped.qzboat.com" src="https://tj.misew.top/js/script.js"></script>

      </body>
    </html>
  );
}
