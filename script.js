const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSOCChgba6kTnJVYCq9EwjuOPkyGhlDa2LNUexGRO6c4yVypM88eoGzn0Nm0MxLs55Q3kHkotfaVS1S/pub?output=csv";

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
setInterval(fetchSheetData, 5000);