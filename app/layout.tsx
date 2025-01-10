import "@/app/global.css";
import Header from "@/app/_components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center p-3">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
