export const getClassName = (isSelected: boolean) => {
  const baseClasses = "px-3 py-2 rounded-md text-sm font-medium"; // base styles
  const activeClasses = isSelected
    ? "bg-blue-500 text-white"
    : "text-gray-600 hover:bg-blue-500 hover:text-white";

  return `${baseClasses} ${activeClasses}`;
};
