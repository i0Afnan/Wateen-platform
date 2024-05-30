import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  href: any;
  children: React.ReactNode;
}

const CustomLink = ({ href, children, ...props }: CustomLinkProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none' }} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
