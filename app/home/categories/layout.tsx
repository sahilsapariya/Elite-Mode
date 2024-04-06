export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container max-container padding-container mb-5">
      {children}
    </section>
  );
}
