import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlayListor | Login",
  description: "Get all playlist Links from various providers",
};

export default function Layout({ children }) {
  return <main className={inter.className}>{children}</main>;
}
