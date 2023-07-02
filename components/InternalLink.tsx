import Link, { LinkProps } from "next/link";

type InternalLinkProps = LinkProps & {
  children: React.ReactNode;
};

const InternalLink = ({ children, ...props }: InternalLinkProps) => {
  return (
    <Link className="underline hover:decoration-slate-400" {...props}>
      {children}
    </Link>
  );
};

export default InternalLink;
