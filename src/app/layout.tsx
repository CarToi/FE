import "./globals.css";

export const metadata = {
  title: "새길",
  description: "새만금 새길",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
