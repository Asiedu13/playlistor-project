import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { SearchResponseContext } from "./components/common/context/SearchResponseContext";

import { Theme } from "@radix-ui/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlayListor | Home",
  description: "Get all playlist links from various providers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <SearchResponseContext>{children}</SearchResponseContext>
        </Theme>
      </body>
    </html>
  );
}
