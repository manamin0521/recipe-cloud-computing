'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';

const RecipeDetail = ( {params} ) => {
  const router = useRouter()

  // query recipe from database using variable params.id
  const recipeName = "RecipeName" 
  const ingredients = "Ingredients"
  const method = "Method"
  
  const deleteHandler = () => {
    // delete recipe from database
    console.log("Recipe Deleted")
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
        <Link className="ml-5 text-sm underline text-red-600" onClick={deleteHandler} href='/recipe'>Delete</Link>
      </div>
    </div>
  );
};

export default RecipeDetail;
