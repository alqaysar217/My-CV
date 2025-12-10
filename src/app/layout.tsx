import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import SpaceBackground from '@/components/3d/SpaceBackground';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'CosmicVCard | Mahmoud Omar Ali Hassani',
  description: 'Full Stack Developer | MIS Graduate | Programming Instructor',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          spaceGrotesk.variable
        )}
      >
        <LanguageProvider>
          <SpaceBackground />
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
