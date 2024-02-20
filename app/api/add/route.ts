const { google } = require("googleapis");
import path from "path";
const spreadsheetId = "1Lk0r5jvcyji2lcGvDe9__XnXQqZ8-rt1noyNZgef0Os";

const credentialsPath = path.join(process.cwd(), "credentials.json");
const auth = new google.auth.GoogleAuth({
  keyFile: credentialsPath, // Provide the correct path to your credentials.json file
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});
export async function POST(req: Request) {
  
  const { userData } = await req.json(); // Assuming your request body contains a 'messages' field

  const authClient = await auth.getClient();

  const sheets = google.sheets({ version: "v4", auth: authClient });

  // Append a new row to the spreadsheet
  const response = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "testing!A:F",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [userData],
    },
  });

  return Response.json({ data: response.data }); // Return the appended row data
}
