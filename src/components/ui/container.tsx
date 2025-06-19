import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20', className)}>
      {children}
    </div>
  );
}
