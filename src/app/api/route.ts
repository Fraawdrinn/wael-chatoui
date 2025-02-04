import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ name, email, subject, message }]);

    if (error) throw error;

    return NextResponse.json({ message: "Message saved successfully!", data }, { status: 200 });
  } catch (error) {
    console.error("Error inserting data into Supabase:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch contacts from Supabase
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
    return NextResponse.json({ error: "Error fetching contacts" }, { status: 500 });
  }
}
