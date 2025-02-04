import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Path to the database file
const dbPath = path.resolve("src/app/api/db.json");

// Define interfaces for data structures
interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
  date?: string;
}

interface DB {
  contacts: ContactData[];
  [key: string]: ContactData[];
}

// Function to read data from the JSON file asynchronously
const readData = async (): Promise<DB> => {
  try {
    const data = await fs.promises.readFile(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { contacts: [] };
  }
};

// Function to write data to the JSON file asynchronously
const writeData = async (newData: ContactData, listName: string = "contacts") => {
  try {
    const db: DB = await readData();
    
    // Ensure the list exists, otherwise initialize it
    if (!db[listName]) {
      db[listName] = [];
    }

    // Add the new data to the list
    db[listName].push(newData);

    // Write the updated data back to the file
    await fs.promises.writeFile(dbPath, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error writing to database:", error);
  }
};

// 📨 POST: Store contact data in contacts.json
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact: ContactData = {
      name,
      email,
      subject,
      message,
      date: new Date().toISOString(),
    };

    await writeData(newContact);

    return NextResponse.json({ message: "Message successfully saved!" }, { status: 200 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// 📜 GET: Retrieve the list of stored contacts
export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json(data.contacts, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ error: "Error fetching contacts" }, { status: 500 });
  }
}
