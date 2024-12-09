'use client';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomeButton() {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push('/home')}
        alt='Home'
        src={"/icons/home.svg"}
        height={48}
        width={48}
      />
    </div>
  );
}