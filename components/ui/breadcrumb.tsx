// src/components/ui/breadcrumb.tsx
import Link from 'next/link';

interface BreadcrumbProps {
  paths: {
    label: string;
    href: string;
    isCurrent?: boolean;
  }[];
}

export default function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 sm:space-x-3 text-sm font-medium">
        
        {/* Lien vers l'Accueil */}
        <li className="inline-flex items-center">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
          >
            Accueil
          </Link>
        </li>
        
        {/* Itération sur les chemins spécifiques de la page */}
        {paths.map((path, index) => (
          <li key={path.href} className="flex items-center">
            {/* Séparateur */}
            <svg 
              className="w-4 h-4 text-gray-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            
            {/* Lien ou Texte de la page actuelle */}
            {path.isCurrent ? (
              <span className="ml-2 text-gray-700">
                {path.label}
              </span>
            ) : (
              <Link
                href={path.href}
                className="ml-2 text-gray-500 hover:text-blue-600 transition-colors duration-150"
              >
                {path.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}