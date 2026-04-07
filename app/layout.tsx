export const metadata = {
  title: "Maestría de Pesca",
  description: "Tu guía práctica para pescar mejor desde el celular",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#020617" }}>
        {children}
      </body>
    </html>
  );
}
