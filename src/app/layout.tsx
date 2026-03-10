import './globals.css';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { QueryProvider } from '@/components/layout/query-provider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider><div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div></QueryProvider>
      </body>
    </html>
  );
}
