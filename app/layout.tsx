import React from 'react';
import '@/styles/globals.css';
import { UserProvider } from "@/context/UserContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-50">
          <main >
            <UserProvider>
              {children}
            </UserProvider>
          </main>
      </body>
    </html>
  );
}
