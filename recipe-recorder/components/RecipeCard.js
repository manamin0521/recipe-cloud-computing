import Link from 'next/link';
import {Card, CardBody} from "@nextui-org/react";

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipe/${encodeURIComponent(recipe.id)}`}>
            <div>
                <Card
                    shadow='none' 
                    fullWidth='true'
                    isHoverable='true' 
                    isPressable='true'
                    >
                    <CardBody>
                        <p>{recipe.recipeName}</p>
                    </CardBody>
                </Card>
            </div>
        </Link>
    );
};

export default RecipeCard;
