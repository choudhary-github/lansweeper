interface ButtonProps {
  name: string;
  color?: string;
  style?: React.CSSProperties;
}

const Button = ({ name, color, style }: ButtonProps) => (
  <button
    style={{ backgroundColor: color, ...style }}
    className="text-white px-7 py-3 text-[16px] font-bold rounded transition-all duration-200 hover:opacity-90"
  >
    {name}
  </button>
);

export default Button;
