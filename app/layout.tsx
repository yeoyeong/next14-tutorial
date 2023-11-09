import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased = 타일윈드 글씨 부드럽게 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
