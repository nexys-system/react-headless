import { UIProps } from "../../lib/form/date-range/type";
import Headless from "../../lib/form/date-range";

const UI = ({ dateRange, setDateRange, handleSubmit, errors }: UIProps) => (
  <form onSubmit={handleSubmit}>
    <div className="flex items-center mb-3">
      <input
        type="date"
        className={`form-input border-2 px-3 py-1 rounded-l ${
          errors.start ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="Start Date"
        value={dateRange.start || ""}
        onChange={(v) => setDateRange({ ...dateRange, start: v.target.value })}
      />
      <span className="px-2 bg-gray-200">-</span>
      <input
        type="date"
        className={`form-input border-2 px-3 py-1 rounded-r ${
          errors.end ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="End Date"
        value={dateRange.end || ""}
        onChange={(v) => setDateRange({ ...dateRange, end: v.target.value })}
      />

      <button
        disabled={!dateRange.end || !dateRange.start}
        className="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded"
        type="submit"
      >
        Apply
      </button>
      <div id="validationServerUsernameFeedback" className="text-red-500 pt-1">
        {errors.start?.join(" ")}
        {errors.end?.join(" ")}
      </div>
    </div>
  </form>
);

export default Headless(UI);
