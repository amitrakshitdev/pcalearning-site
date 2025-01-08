import "@/app/globals.css";
import Header from "@/components/Header/Header";
import clsx from 'clsx';
import { Metadata } from "next";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
});

export const metadata : Metadata= {
  title: {
    "absolute": "PCA Learning | Computer Education Redefined",
    "default": "PCA Learning | Pakrashi Computer Academy",
    "template" : "%s | PCA Learning",
  },
  description: "PCA Learning is a platform that offers a wide range of courses to help you learn coding and programming. We offer courses for beginners as well as advanced learners. Our courses are designed to help you learn coding in a fun and interactive way. Whether you are a student, a professional, or someone who is just interested in learning coding, we have a course for you.",
  keywords: ["Computer", "Computer Learning", "Computer Courses", "Computer Science", "MCA", "BCA", "Entrance Exam", "Computer Education", "Computer Training", "Computer Institute", "Computer Classes", "Computer Coaching", "Computer Academy", "Computer Center", "Computer School", "Computer College", "Computer University", "Computer Degree", "Computer Diploma", "Computer Certificate", "Computer Training Institute", "Computer Training Center", "Computer Training Classes", "Computer Training Coaching", "Computer Training Academy", "Computer Training School", "Computer Training College", "Computer Training University", "Computer Training Degree", "Computer Training Diploma", "Computer Training Certificate", "Computer Training Training", "Computer Training Training Institute", "Computer Training Training Center", "Computer Training Training Classes", "Computer Training Training Coaching", "Computer Training Training Academy", "Computer Training Training School", "Computer Training Training College", "Computer Training Training University", "Computer Training Training Degree", "Computer Training Training Diploma", "Computer Training Training Certificate"],
  publisher: "PCA Learning",
  creator: "Amit Rakshit | +91 8918075974",
  "category": "Education"
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
