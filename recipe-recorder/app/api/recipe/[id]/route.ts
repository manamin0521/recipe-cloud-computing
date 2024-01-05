import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, 
    { params }:  {params: { id: string } }
){
    const id = params.id
    const recipes = await prisma.recipe.findUnique({
        where: {
            id: parseInt(id,10)
        }
    })
    return NextResponse.json(recipes)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string }}
) {
    const id = params.id
    const deleted = await prisma.recipe.delete({
        where: {
            id: parseInt(id,10)
        }
    })
    
    return NextResponse.json(deleted)
}