import Papa from "papaparse";

const API_SHEET_URL = process.env.API_SHEET_URL!;
const DEFAULT_PAGE_SIZE = +process.env.DEFAULT_PAGE_SIZE!;

// get all recipes
export async function getAll() {
  try {
    const res = await fetch(API_SHEET_URL);
    const textData = await res.text();
    const parsedData = await Papa.parse<any>(textData, { header: true });

    return parsedData.data;
  } catch (error) {
    throw new Error("Failed to fetch all recipes");
  }
}

// paginate the data
function paginateData({
  data,
  pageNumber,
  pageSize,
}: {
  data: any[];
  pageNumber: number;
  pageSize: number;
}) {
  const startIndex = (pageNumber - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
}

const api = {
  recipes: {
    fetch: async ({ pageNumber }: { pageNumber: number }) => {
      const data = await getAll();
      // TODO: page size should be configurable by env variable
      const paginatedData = paginateData({
        data,
        pageNumber,
        pageSize: DEFAULT_PAGE_SIZE,
      });

      // TODO: research on how to find out what is the best way to calculate total pages, should I use the same endpoint? or should I use the total count of the data?
      return { results: paginatedData, totalPages: 5 };
    },
  },
};

export default api;
