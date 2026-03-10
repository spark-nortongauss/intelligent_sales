import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={cn('rounded-lg bg-navy px-4 py-2 text-white hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent', props.className)} />;
}
