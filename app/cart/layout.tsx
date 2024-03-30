export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Shopping Cart</h1>
      {children}
    </>
  );
}
