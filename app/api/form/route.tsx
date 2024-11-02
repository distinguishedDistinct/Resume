import { connectionSrt } from "@/app/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Form } from "@/app/lib/model/form";

export async function GET() {
  let data;
  try {
    await mongoose.connect(connectionSrt);
    data = await Form.find();
    console.log("MongoDB Connected Scessfully");
    return NextResponse.json({
      result: data,
      message: "Fetched data sucessfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Fetched data unsucessfully",
      success: false,
    });
  }
}

export async function POST(request: { json: () => any }) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);

  try {
    let form = new Form(payload);
    const result = await form.save();
    return NextResponse.json({ result, success: true, status: 200 });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message || "Failed to submit the form",
      status: 400,
    });
  }
}
