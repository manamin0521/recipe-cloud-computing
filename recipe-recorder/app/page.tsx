'use client'

import Image from 'next/image'
import Button from "../components/Button";
import Header from "../components/Header";
import { useRouter } from 'next/navigation';
import { clients } from '@clerk/clerk-sdk-node';
 


export default function Home() {
  const router = useRouter()
  return (
    <main>
      <div className='body'>
        <h1>Embark on your culinary journey!</h1>
        <p className='body-text'>Log in now to craft and capture your delectable recipes.</p>
        <div className='log-in'>
          <Button text={"Log In"} onClick={() => router.push('/recipe')}/>
        </div>
      </div>
    </main>
  )
}
