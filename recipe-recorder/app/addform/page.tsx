'use client'

import Button from "@/components/Button";
import Link from 'next/link';
import React from "react";
import { useState } from "react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";

const AddForm = () => {
    const router = useRouter()

    const { user } = useUser();
    const userId = user?.id

    const [recipeName, setRecipeName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [method, setMethod] = useState('')

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        // post recipe data to database
        try {
            const body = { userId, recipeName, ingredients, method }
            await fetch('/api/recipe', {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            })
            console.log("Added to Database")
        } catch (error) {
            console.error(error)
        }
        // console.log(userId)
        // console.log(recipeName)
        // console.log(ingredients)
        // console.log(method)
        router.push('/recipe')
    }

    return (
        <div>
            <div className='body'>
                <h1>New Recipe</h1>
                <div className="mt-5" >
                    <Input 
                        name="recipeName" 
                        label="Recipe Name" 
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(e)=>setRecipeName(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <Textarea
                        name="ingredients"
                        label="Ingredients"
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(e)=>setIngredients(e.target.value)}
                    />
                </div>
                <div className="mt-5">
                    <Textarea
                        name="method"
                        label="Method"
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(e)=>setMethod(e.target.value)}
                    />
                </div>
                <div className="mt-7">
                    <Button text={"Add Recipe"} onClick={submitData}/>
                    <Link className="ml-5 text-sm underline" href='/recipe'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default AddForm