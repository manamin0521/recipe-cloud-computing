import Button from "@/components/Button";
import Header from "@/components/Header";
import RecipeCard from '@/components/RecipeCard';
import {Link, ScrollShadow} from "@nextui-org/react";
import { currentUser } from '@clerk/nextjs';
import { prisma } from "@/lib/prisma";

export default async function RecipePage() {
  const user = await currentUser();
  const userId = user?.id

  const recipes = await prisma.recipe.findMany({
    where: {userId:userId},
  })

  // const recipes = [
  //   // display all recipes in database
  //   { id: '1',
  //     userId: 'abcd',
  //     recipeName: 'Recipe 1',
  //     ingredients: 'Egg',
  //     method: 'Fry'
  //   },
  //   { id: '2',
  //     userId: 'abcd',
  //     recipeName: 'Recipe 2',
  //     ingredients: 'Potato',
  //     method: 'Bake'
  //   },
  // ];

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
          <Link className='link-button' href='/addform'>New Recipe</Link>
        </div>
      </div>
    </main>
  )
}
