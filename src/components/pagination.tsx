"use client";

import {
  Pagination as PaginationShadCn,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const disabledPreviousBtn = currentPage <= 1;
  const disabledNextBtn = currentPage >= totalPages;

  return (
    <PaginationShadCn>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            isActive={!disabledPreviousBtn}
            aria-disabled={disabledPreviousBtn}
            className={cn("border-none", {
              "pointer-events-none text-gray-300": disabledPreviousBtn,
            })}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            isActive={!disabledNextBtn}
            aria-disabled={disabledPreviousBtn}
            className={cn("border-none", {
              "pointer-events-none text-gray-300": disabledNextBtn,
            })}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationShadCn>
  );
}
