type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="rounded border" {...props}>
      {children}
    </button>
  );
};

export default Button;
