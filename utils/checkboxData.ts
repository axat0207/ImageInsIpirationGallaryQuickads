// import * as XLSX from "xlsx";
// import fs from "fs";

// const readNameColumn = (): string[] => {
//   const filePath = "../checkboxData.csv"; // Replace this with your file path

//   try {
//     const fileData = fs.readFileSync(filePath);
//     const workbook = XLSX.read(fileData, { type: "buffer" });
//     const sheetName = workbook.SheetNames[0]; // Assuming the name of the sheet is the first one

//     const worksheet = workbook.Sheets[sheetName];
//     const ref = worksheet["!ref"];
//     if (!ref) {
//       console.error("Reference not found in worksheet");
//       return [];
//     }

//     const range = XLSX.utils.decode_range(ref);

//     const names: string[] = [];

//     for (let i = range.s.r + 1; i <= range.e.r; i++) {
//       const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: 0 })];
//       if (cell && cell.v) {
//         names.push(cell.v as string);
//       }
//     }

//     return names;
//   } catch (error) {
//     console.error("Error reading the file:", error);
//     return [];
//   }
// };

// export default readNameColumn;



export const categories = [
    'Beverage',
    'Candle',
    'Cosmetics',
    'Fashion',
    'Furniture',
    'Home Appliances',
    'Home Decor',
    // 'Homeware',
    // 'Jewelry',
    'Kitchenware',
    // 'Musical Instruments',
    'Outdoor Gear',
    // 'Party',
    'Perfume',
    // 'Pet Supplies',
    'Shoes',
    'Skincare and cosmetics',
    'Sports',
    // 'Stationery',
    'Tech & gadgets',
    // 'Toys',
    'Watch'
  ];
  