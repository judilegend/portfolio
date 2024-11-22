import { useTheme } from "next-themes";
import "./globals.css";
// import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>{children}</ErrorBoundary> {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
