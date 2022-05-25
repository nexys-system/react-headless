import { UIProps } from "../../lib/form/date-range/type";
import Headless from "../../lib/form/date-range";

const UI = ({ dateRange, setDateRange, handleSubmit, errors }: UIProps) => (
  <form onSubmit={handleSubmit}>
    <div className="input-group mb-3 has-validation">
      <input
        type={"date"}
        className={`form-control ${errors.start ? "is-invalid" : ""}`}
        placeholder="Start Date"
        value={dateRange.start || ""}
        onChange={(v) => setDateRange({ ...dateRange, start: v.target.value })}
      />
      <span className="input-group-text"> - </span>
      <input
        type={"date"}
        className={`form-control ${errors.end ? "is-invalid" : ""}`}
        placeholder="End Date"
        value={dateRange.end || ""}
        onChange={(v) => setDateRange({ ...dateRange, end: v.target.value })}
      />

      <button
        disabled={!dateRange.end || !dateRange.start}
        className="btn btn-outline-secondary"
        type="submit"
      >
        Apply
      </button>
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        {errors.start?.join(" ")}
        {errors.end?.join(" ")}
      </div>
    </div>
  </form>
);

export default Headless(UI);
