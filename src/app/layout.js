import { useTheme } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  // const { theme, setTheme } = useTheme("dark");

  return (
    <html lang="en">
      <body className="h-screen  text-foreground bg-[#0E0D0D]">
        <Providers theme="dark">{children}</Providers>
      </body>
    </html>
  );
}
