import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function RecipeTable({ recipes }) {
  // TODO: change this to boolean
  const isVegetarian = (vegetarian: string) => vegetarian == "🥬";

  return (
    <Table>
      {/* <TableCaption>Una lista de recetas para que te inspires.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Descripcion</TableHead>
          <TableHead>Etiquetas</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* TODO: add id's to the DB */}
        {recipes.map((recipe) => (
          <TableRow
            key={recipe.id}
            className={cn({
              "bg-green-50": isVegetarian(recipe.vegetarian),
            })}
          >
            <TableCell>
              {recipe.name} {recipe.vegetarian == "🥬" && "🥬"}
            </TableCell>
            <TableCell className="text-xs">{recipe.tags}</TableCell>
            <TableCell>✏️</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
