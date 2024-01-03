'use client'

import Image from 'next/image'
import Button from "../components/Button";
import { useRouter } from 'next/navigation'
import { clients } from '@clerk/clerk-sdk-node';


export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div>
        <h1>Embark on your culinary journey!</h1>
        <Button text={"Log In"} onClick={undefined}/>
      </div>
    </main>
  )
}
