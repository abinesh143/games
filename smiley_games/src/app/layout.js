import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smiley Games",
  description:
    "Immerse yourself in the thrilling world of Online Games, the ultimate online gaming experience. Engage in epic battles, embark on challenging quests, and unleash your strategic prowess in this dynamic multiplayer game. With stunning graphics and seamless gameplay, Online Games transports you to a virtual realm where excitement knows no bounds",
  manifest: "/manifest.json",
  keywords: [
    "online",
    "games",
    "play",
    "racing",
    "online games",
    "shooting games",
    "zombie games",
    "new games",
  ],
  themeColor: [{ color: "#fff" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="86DlBDJhOExKKchciyhEUpjJkKbnCboJBQ-rcMCCSME"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6K34PRKLQV"
        ></script>
        <Script strategy="lazyOnload">{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-6K34PRKLQV');`}</Script>
      </body>
    </html>
  );
}
