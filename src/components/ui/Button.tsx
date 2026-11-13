import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue';

const variantClass: Record<Variant, string> = {
  primary: 'bg-blue text-white shadow-soft hover:-translate-y-0.5 hover:brightness-95',
  outline: 'border border-line bg-white text-navy hover:border-blue hover:text-blue',
};

type CommonProps = { variant?: Variant; children: ReactNode };
type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Componente base `Button` — variantes `primary`/`outline`, raio pill, sem lógica de negócio. */
export default function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = 'primary', children, ...domProps } = props;
  const className = `${base} ${variantClass[variant]}`;

  if ('href' in domProps && typeof domProps.href === 'string') {
    return (
      <a className={className} {...(domProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...(domProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
