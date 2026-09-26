import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "Sound Fusion | Professional Sound & Event Lighting",
    template: "%s | Sound Fusion",
  },

  description:
    "Professional sound, lighting and entertainment services for weddings, private parties and corporate events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}