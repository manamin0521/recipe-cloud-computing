'use client'

import Button from "@/components/Button";
import Header from "@/components/Header";
import RecipeCard from '@/components/RecipeCard';
import {ScrollShadow} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";

export default function RecipePage() {
  const { user } = useUser();
  const router = useRouter()
  
  const userId = user?.id

  const recipes = [
    // display all recipes in database
    { id: '1',
      UserId: 'abcd',
      RecipeName: 'Recipe 1',
      Ingredients: 'Egg',
      Method: 'Fry'
    },
    { id: '2',
      UserId: 'abcd',
      RecipeName: 'Recipe 2',
      Ingredients: 'Potato',
      Method: 'Bake'
    },
  ];

  return (
    <main>
      <div className='body'>
        <div className='box-content pb-5'>
          <h1>{user?.firstName}'s Recipes</h1>
        </div>
        <div>
          <ScrollShadow className="h-[300px]">
          <div className="recipe-list">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          </ScrollShadow>
        </div>
        <div className='button'>
          <Button text={"New Recipe"} onClick={() => router.push('/addform')}/>
        </div>
      </div>
    </main>
  )
}
