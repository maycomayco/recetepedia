import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import api from "@/lib/api";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
};

export default async function RecipeTable({ currentPage }: Props) {
  // TODO: get the page number from the query params
  const { results: recipes } = await api.recipes.fetch({
    pageNumber: currentPage,
  });

  // TODO: change this to boolean
  const isVegetarian = (vegetarian: string) => vegetarian == "🥬";

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Menú</TableHead>
          <TableHead>Vegetariano</TableHead>
          {/* <TableHead>Acciones</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* TODO: add id's to the DB */}
        {recipes.map((recipe) => (
          <TableRow
            key={recipe.id}
            className={cn({
              "bg-green-50 dark:bg-green-950": isVegetarian(recipe.vegetarian),
            })}
          >
            <TableCell>
              {/* <p className={cn("line-clamp-1")}> */}
              {capitalize(recipe.name)}
              {/* </p> */}
            </TableCell>
            <TableCell className="text-center">
              {recipe.vegetarian == "🥬" ? "🥬" : ""}{" "}
            </TableCell>
            {/* <TableCell>✏️</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
