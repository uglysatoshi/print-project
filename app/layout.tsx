// /app/layout.tsx

import React from 'react';
import '@/styles/globals.css';
import {Navbar} from "@/components/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
         <Navbar></Navbar>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
