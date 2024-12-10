'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeButton() {
  const router = useRouter();
  return (
    <div className="absolute sm:left-12 lg:left-52 h-12 w-12 rounded-full z-50">
      <Image
        onClick={() => router.push('/home')}
        alt="Home"
        src={'/icons/home.svg'}
        height={100}
        width={100}
        className="cursor-pointer hover:bg-[#00000036] p-1 rounded-full"
      />
    </div>
  );
}
