import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.resolve("src/app/api/db.json");

// Define interfaces for data structures
interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface DB {
  contacts: ContactData[];
}

// Fonction pour lire les données du fichier JSON
const readData = () => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Fonction pour écrire dans le fichier JSON
export const writeData = (newData: ContactData, listName: string = "contacts") => {
  try {
    const dbFile = fs.readFileSync(dbPath, "utf-8");
    const db: DB = JSON.parse(dbFile);

    // Check if listName exists, if not create it
    if (!db[listName]) {
      db[listName] = [];
    }

    // Push the new data to the specific list
    db[listName].push(newData);

    // Write updated data back to the JSON file
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error writing to database:", error);
  }
};

// 📨 POST: Stocke les données du formulaire dans contacts.json
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    const contacts = readData();
    contacts.push({ name, email, subject, message, date: new Date().toISOString() });
    writeData(contacts);

    return NextResponse.json({ message: "Message enregistré avec succès !" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// 📜 GET: Récupère la liste des contacts stockés
export async function GET() {
  try {
    const contacts = readData();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la récupération des contacts." }, { status: 500 });
  }
}
