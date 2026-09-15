import { Suspense } from "react";
import ProductsCategories from "@/portions/ProductsCategories";

interface ProductsPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = (await searchParams) ?? {};
  const category = params.category === "Men" ? "Men" : "Women";

  return (
    <Suspense fallback={<div className="w-full min-h-[60vh] bg-[#f7f7eb]" />}>
      <ProductsCategories category={category} />
    </Suspense>
  );
}