import Pagination from "@/components/pagination";
import RecipeTable from "@/components/recipe-table";
import api from "@/lib/api";

type Props = {
  searchParams: {
    page: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page || 1);
  console.log({ currentPage });
  // TODO: mover esto de aca, el totalPages deberia obtenerse desde el component pagination
  const { results, totalPages } = await api.recipes.fetch({ pageNumber: 1 });

  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-screen-lg mx-auto">
      <h1 className="mb-4 text-xl md:text-2xl">Lista de recetas</h1>

      <section>
        <RecipeTable currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
