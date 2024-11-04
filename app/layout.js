
import "./globals.css";


export const metadata = {
  title: "Addifico | Market Insights that make a difference",
  description: "Market Insights Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
