import Papa from "papaparse";

// TODO: remove this and use the API
const sheetURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRp-BNer33uedck41E24UPSqLiT_0OX5kVCEWOkX4ceqwya9EvJs7cDb0yKEoYlmPgJBgCgG7zGwbmY/pub?gid=0&output=csv";

// get all recipes
export async function getAll() {
  const res = await fetch(sheetURL);
  const textData = await res.text();
  const parsedData = await Papa.parse<any>(textData, { header: true });

  return parsedData.data;
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
      const paginatedData = paginateData({ data, pageNumber, pageSize: 10 });

      return { results: paginatedData, totalPages: 5 };
    },
  },
};

export default api;
