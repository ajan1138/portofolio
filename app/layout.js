import { Poppins } from "next/font/google";
import "@/public/global.css";
import logo from "@/public/logo.png";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ahmed | Portofolio",
  description: "Portofolio made by Ahmed",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
