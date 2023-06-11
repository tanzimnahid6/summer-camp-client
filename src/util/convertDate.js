

export const convertData = (date) =>{
    // Initial date string
const initialDateStr = date;

// Create a new Date object by parsing the initial date string
const initialDate = new Date(initialDateStr);

// Extract the year, month, and day from the initial date
const year = initialDate.getFullYear();
const month = (initialDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to the month as it is zero-based
const day = initialDate.getDate().toString().padStart(2, '0');

// Format the date in the desired format
const formattedDate = `${year}-${month}-${day}`;

// Output the formatted date
console.log(formattedDate); // Output: "2023-06-20"
return formattedDate

}