'use client'

import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import Button from '@/components/Button';
import { routeModule } from 'next/dist/build/templates/pages';

const RecipeDetail = ( {params} ) => {
  const router = useRouter()

  let [ recipe, setRecipe ] = useState('')

  useEffect (() => {
    fetch('/api/recipe/'+params.id, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => setRecipe(json))
  },[])

  // query recipe from database using variable params.id
  const recipeName = recipe.recipeName
  const ingredients = recipe.ingredients
  const method = recipe.method

  const deleteHandler = async (id:any) => {
    try {
        // delete recipe from database
        await fetch('/api/recipe/'+id, {
          method: 'DELETE'
        })
        console.log(id+" Deleted")
        router.push('/recipe')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='body'>
      <h1>{ recipeName }</h1>
      <div>
        <h3 className='font-bold mt-5'>Ingredients</h3>
        <p>{ ingredients }</p>
      </div>
      <div>
        <h3 className='font-bold mt-5'>Method</h3>
        <p>{ method }</p>
      </div>
      <div className="mt-7">
        <Button text={"Back"} onClick={() => router.push('/recipe')}/>
        <Link className="ml-5 text-sm underline text-red-600" onClick={() => deleteHandler(params.id)} href='/recipe'>Delete</Link>
      </div>
    </div>
  );
};

export default RecipeDetail;

