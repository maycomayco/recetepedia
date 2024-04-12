import Pagination from "@/components/pagination";
import RecipeTable from "@/components/recipe-table";
import api from "@/lib/api";

export default async function Home() {
  // TODO: get the page number from the query params
  const { results, totalPages } = await api.recipes.fetch({ pageNumber: 1 });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-screen-lg mx-auto">
      <h1 className="mb-4 text-xl md:text-2xl">Lista de recetas</h1>

      <section>
        <RecipeTable recipes={results} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
