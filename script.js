const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOCChgba6kTnJVYCq9EwjuOPkyGhlDa2LNUexGRO6c4yVypM88eoGzn0Nm0MxLs55Q3kHkotfaVS1S/pub?gid=1358922199&single=true&output=csv"; // my url
// const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTX-0PzLyXQDK_YlbV-4-0CXNvmeWgUaLZjRPYFHb8SEqVEjBHhN6O0_gMzvn7v-SfOnLze9hJiTBCR/pub?output=csv"; // mike url

async function fetchSheetData() {
    try{
        const response = await fetch(CSV_URL);
        const csvText= await response.text();


        document.getElementById("sheetData").innerText = csvText;
    }
    catch(error)
    {
        console.error("error loading data, ", error);
    }
}

fetchSheetData();
setInterval(fetchSheetData, 600000);































/*
function MERGE_TABS() {
  const tabsToMerge = [
    "Demon List", "Seer's Profile", "Ash's Profile", "Joker's Profile", 
    "Mateo's Profile", "Mark's Profile", "Mike's Profile", "Water's Profile", 
    "Dovel's Profile", "Acri's Profile", "Badges", "AREDL_Data"
  ];
  
  let masterData = [];
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for (let i = 0; i < tabsToMerge.length; i++) {
    let sheet = ss.getSheetByName(tabsToMerge[i]);
    if (!sheet) continue; 
    
    let lastRow = sheet.getLastRow();
    if (lastRow < (i === 0 ? 1 : 2)) continue; 
    
    let startRow = (i === 0) ? 1 : 2; 
    let numRows = lastRow - startRow + 1;
    let data = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn()).getValues();
    
    // Filter out rows where the first column is blank (simulating WHERE Col1 IS NOT NULL)
    let filteredData = data.filter(row => row[0] !== "" && row[0] !== null && row[0] !== undefined);
    masterData = masterData.concat(filteredData);
  }
  
  return masterData;
}




*/