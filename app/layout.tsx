import Header from "../components/Header";
import { AuthProvider } from "./provider";
import "../global.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-cyan-300">
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
