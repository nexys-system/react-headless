import StatusChange, {
  LayoutProps,
  ButtonProps,
} from "../../lib/status-change";

const Layout = ({ children }: LayoutProps) => (
  <div className="btn-group">{children}</div>
);

const Button = ({
  selected,
  id,
  label,
  handleChange,
  disabled,
}: ButtonProps) => {
  const classes = ["btn"];

  if (selected === id) {
    classes.push("btn-primary");
  } else {
    classes.push("btn-secondary");
  }

  const className = classes.join(" ");

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
