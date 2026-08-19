import Hero from "@/components/client/hero";
import Categories from "@/components/client/landing/categories";
import Products from "@/components/client/landing/features-products";
import NewProducts from "@/components/client/landing/new-arrivals";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
      <NewProducts />
    </main>
  );
}
