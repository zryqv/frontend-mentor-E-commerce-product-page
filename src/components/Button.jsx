function Button({
  children,
  className,
  color = '#F7F8FD',
  letBeShadows = false,
  ...props
}) {
  return (
    <div
      {...props}
      className={`py-[0.7rem] rounded-lg ${className} bg-[${color}] ${
        letBeShadows && `shadow-2xl shadow-orange-600 `
      }`}
    >
      {children}
    </div>
  );
}
export default Button;
