'use client'

import Button from "@/components/Button";
import Header from "@/components/Header";
import { useRouter } from 'next/navigation';
import { useUser } from "@clerk/nextjs";

export default function RecipePage() {
  const { user } = useUser();
  const router = useRouter()
  return (
    <main>
      <div className='body'>
        <h1>{user?.firstName}'s Recipes</h1>
        <div className='button'>
          <Button text={"New Recipe"} onClick={() => router.push('/addform')}/>
        </div>
      </div>
    </main>
  )
}
