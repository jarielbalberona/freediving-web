import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { classNames } from "~/utilities/general";
import Navigation from "~/components/navigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Freediving Philippines",
  description:
    "Connect with fellow freedivers, find buddies, diving spots, and training centers in the Philippines",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full bg-white ">
        <body className={classNames("h-full ", inter.className)}>
          <Navigation>{children}</Navigation>
        </body>
      </html>
    </ClerkProvider>
  );
}
