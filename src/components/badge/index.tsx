const Badge = ({ children }: { children: JSX.Element }) => (
  <span className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
    {children}
  </span>
);

export default Badge;
