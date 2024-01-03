import { currentUser } from "@clerk/nextjs";
import Button from "@/components/Button";

const RecipePage = async () => {
  const user = await currentUser();
  return (
    <div>
      <div className='body'>
        <h1>{user?.firstName}'s Recipes</h1>
        <div className='add-recipe'>
          <Button text={"Add Recipe"} onClick={undefined}/>
        </div>
      </div>
    </div>
  )
}

export default RecipePage