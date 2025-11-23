// src/components/go-back-button.tsx
'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from './ui/arrow-left-icon';

export default function GoBackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      aria-label="Retour à la page précédente"
      className="p-2 rounded-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
    >
      <ArrowLeftIcon size={32} className="text-current" />
    </button>
  );
}