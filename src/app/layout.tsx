import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name | Portfolio',
  description: 'Full Stack Developer - Golang / React',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`
          ${jetBrainsMono.className}
          bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
          text-white scroll-smooth
        `}
      >
        <main className="transition-all duration-500 ease-in-out min-h-[80vh]">
          {children}
        </main>

        {/* Desktop only */}
        <footer className="hidden md:block w-full text-center py-10 text-sm transition-all duration-500 ease-in-out text-zinc-400">
          © 2025 Made with <span role="img" aria-label="heart">❤️</span> by Your Name
        </footer>
      </body>
    </html>
  );
}
