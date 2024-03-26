
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Damien Weissmann | Freelance FullStack Developer Malaysia",
  description: "Damien Weissmann full stack nextjs and apollo developer",
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Apollo', 'FullStack Developer Malaysia', 'Damien Weissmann Malaysia'],
  authors: [{ name: 'Damien Weissmann Malaysia', url: 'https://nextjs.org' }],
  creator: 'Damien Weissmann | FullStack Developer Malaysia',
  publisher: 'Damien Weissmann Malaysia',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>

    </html>
  );
}
