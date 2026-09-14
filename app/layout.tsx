import React from 'react';

export const metadata = {
  title: 'Full-Stack 3D Developer Portfolio',
  description: 'Interactive 3D Web Development Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
