import StatusChange, {
  LayoutProps,
  ButtonProps,
} from "../../lib/status-change";

const Layout = ({ children }: LayoutProps) => (
  <div className="flex space-x-2">{children}</div>
);

const Button = ({
  selected,
  id,
  label,
  handleChange,
  disabled,
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 text-sm font-medium rounded focus:outline-none";
  const activeClasses =
    selected === id ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700";

  const className = `${baseClasses} ${activeClasses}`;

  return (
    <button
      disabled={disabled}
      onClick={() => handleChange(id)}
      type="button"
      className={className}
    >
      {label}
    </button>
  );
};

export default StatusChange(Layout, Button);
