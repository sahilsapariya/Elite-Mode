export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container max-container sm:padding-container my-5 flex gap-5">
      {children}
    </section>
  );
}
