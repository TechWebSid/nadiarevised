import './globals.css';

export const metadata = {
  title: 'NR Interiors | Nadia — Interior Architecture & Design Studio',
  description:
    'NR Interiors is a London and Surrey-based interior design studio founded by Nadia, crafting unique, timeless, character-filled residential interiors focused on intuition and architectural functionality.',
  keywords: [
    'NR Interiors',
    'nrinteriors',
    'Nadia Interior Designer',
    'London Interior Design',
    'Surrey Interior Design',
    'Richmond Interior Design',
    'Wimbledon Interior Design',
    'Heritage Property Renovation',
    'Arts and Crafts Interior',
    'Edwardian House Restoration',
  ],
  openGraph: {
    title: 'NR Interiors | Nadia — Interior Architecture & Design',
    description:
      'Refined, timeless interiors that feel truly personal, crafted with intuition, artistry, and ease by Nadia.',
    url: 'https://nrinteriors.co.uk',
    siteName: 'NR Interiors',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className="scroll-smooth h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#181715] font-sans-clean">
        {children}
      </body>
    </html>
  );
}
