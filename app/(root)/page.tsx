import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const SetupPage = () => {
  return (
    <main className="p-4">
      <UserButton afterSignOutUrl='/' />
    </main>
  )
}

export default SetupPage