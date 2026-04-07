import type { ReactNode } from 'react';
import Reveal from './Reveal';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
  className?: string;
};

function PageIntro({ eyebrow, title, description, align = 'left', actions, className }: PageIntroProps) {
  const alignmentClass = align === 'center' ? 'mx-auto max-w-4xl items-center text-center' : 'max-w-4xl';

  return (
    <Reveal variant={align === 'center' ? 'scale' : 'left'} className={['flex flex-col gap-4', alignmentClass, className].filter(Boolean).join(' ')}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h1 className="font-display text-4xl leading-none text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>
      </div>
      {actions ? <div className={align === 'center' ? 'flex justify-center' : ''}>{actions}</div> : null}
    </Reveal>
  );
}

export default PageIntro;
