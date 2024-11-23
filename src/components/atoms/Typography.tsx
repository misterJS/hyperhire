interface TypographyProps {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  color?: string;
  className?: string;
}

export default function Typography({ children, size = 'base', color = 'black', className }: TypographyProps) {
  const textSize = size === 'lg' ? 'text-lg' : size === 'sm' ? 'text-sm' : 'text-base';
  return <p className={`${textSize} text-${color} ${className}`}>{children}</p>;
}
