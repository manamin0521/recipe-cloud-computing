'use client'

import Button from "@/components/Button";
import Link from 'next/link';
import React from "react";
import { useState } from "react";
import {Input} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import { useRouter } from 'next/navigation';


const AddForm = () => {
    const router = useRouter()
    const [formData, setFormData] = useState()

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value, 
        })
      };

    const clickHandler = () => {
        // link to database
        console.log(formData)
        router.push('/recipe')
    }

    return (
        <div>
            <div className='body'>
                <h1>New Recipe</h1>
                <div className="mt-5" >
                    <Input 
                        name="RecipeName" 
                        label="Recipe Name" 
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(event)=>handleInputChange(event)}
                    />
                </div>
                <div className="mt-5">
                    <Textarea
                        name="Ingredients"
                        label="Ingredients"
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(event)=>handleInputChange(event)}
                    />
                </div>
                <div className="mt-5">
                    <Textarea
                        name="Method"
                        label="Method"
                        labelPlacement="inside"
                        variant="bordered"
                        onChange={(event)=>handleInputChange(event)}
                    />
                </div>
                <div className="mt-7">
                    <Button text={"Add Recipe"} onClick={clickHandler}/>
                    <Link className="ml-5 text-sm underline" href='/recipe'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default AddForm