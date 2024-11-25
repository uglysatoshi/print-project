import React from 'react';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main className="p-6">{children}</main>

      </body>
    </html>
  );
}
