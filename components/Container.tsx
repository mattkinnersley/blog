type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <div className="flex justify-center">
    <div className="w-1/2">{children}</div>
  </div>
);

export default Container;
