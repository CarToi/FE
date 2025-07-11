import "./globals.css";

export const metadata = {
  title: "새길",
  description: "하루 끝 당신의, 새길",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div id="modal-root"></div>
        <main>{children}</main>
      </body>
    </html>
  );
}
