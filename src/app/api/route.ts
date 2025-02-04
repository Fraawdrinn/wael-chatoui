import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

// Create a new PostgreSQL client instance
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "mydatabase",
  password: "yourpassword", 
  port: 5432, 
});

// Connect to the PostgreSQL database
client.connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Insert the contact form data into the database
    const query = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [name, email, subject, message];
    const result = await client.query(query, values);

    return NextResponse.json({ message: "Message saved successfully!", data: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error inserting data into PostgreSQL:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Retrieve all contacts from the database
    const result = await client.query("SELECT * FROM contacts ORDER BY date DESC");

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from PostgreSQL:", error);
    return NextResponse.json({ error: "Error fetching contacts" }, { status: 500 });
  }
}
