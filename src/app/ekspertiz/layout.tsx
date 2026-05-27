// @ts-nocheck
export default function EkspertizLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
      </head>
      <body style={{ margin: 0, background: '#111', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
