'use client';
import { useRouter } from 'next/navigation';

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="text-black/50 hover:text-brown transition"
    >
      Go back
    </button>
  );
};