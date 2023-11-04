import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>이벤트</p>
        {children}
      </body>
    </html>
  );
}
