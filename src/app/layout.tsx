import "@/app/globals.css";
import Header from "@/components/Header/Header";
import clsx from 'clsx';
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
});

export const metadata = {
  title: 'PCA Learning',
  description: 'Pakrashi Computer Academy or PCA Learning is a computer academy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(lato.className, ["min-h-dvh"])} data-theme="light">
      <body className={clsx(["min-h-dvh", "bg-background"])}>
        <Header />
        {children}
        {/* Footer */}
        </body>
    </html>
  )
}
