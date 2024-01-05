import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    const recipes = await prisma.recipe.findMany()
    return NextResponse.json(recipes)
}

export async function POST(request: Request) {
    const json = await request.json()

    const created = await prisma.recipe.create({
        data: json
    })
    
    return new NextResponse(JSON.stringify(created), {status:201})
}