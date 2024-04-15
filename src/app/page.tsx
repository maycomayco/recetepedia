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
  // TODO: mover esto de aca, el totalPages deberia obtenerse desde el component pagination
  const { totalPages } = await api.recipes.fetch({ pageNumber: 1 });

  return (
    <main className="flex flex-col">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Recetepedia</h1>
        <p className="text-neutral-400 mt-4">
          Seguro que no sabes que cocinarte? 🤓
        </p>
      </section>

      <section className="mt-6">
        <RecipeTable currentPage={currentPage} />
        <div className="mt-4 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
