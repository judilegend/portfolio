import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Portfolio",
};
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
