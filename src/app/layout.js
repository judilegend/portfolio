import { useTheme } from "next-themes";
import "./globals.css";
import CustomCursor from "./components/CustomCursor"
export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
