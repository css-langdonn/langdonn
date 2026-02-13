function saveConfig(key, value) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('config');
  const data = sheet.getDataRange().getValues();
  
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === key) {
      sheet.getRange(i + 1, 2).setValue(value);
      return "done";
    }
  }
}

// Create a function the main website can call to get settings
function getSettings() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('config');
  const data = sheet.getDataRange().getValues();
  let settings = {};
  data.forEach(row => {
    settings[row[0]] = row[1];
  });
  return settings;
}
