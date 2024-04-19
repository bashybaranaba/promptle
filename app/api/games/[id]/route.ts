import dbConnect from "@/lib/dbConnect";
import Game from "@/models/Game";
import Promptle from "@/models/Promptle";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const game = await Game.findById(id).populate("owner");
    const promptles = await Promptle.find({ game_id: id }).populate("owner");
    return new NextResponse(JSON.stringify({ game, promptles }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}