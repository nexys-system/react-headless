import React from "react";

import { isDateRangeDefined } from "./utils";
import { DateRange, ErrorsDateRange, UIProps } from "./type";

const DateRangeHeadless =
  (UI: (p: UIProps) => JSX.Element) =>
  ({ onSuccess }: { onSuccess: (t1: number, t2: number) => void }) => {
    const [dateRange, setDateRange] = React.useState<Partial<DateRange>>({});
    const [errors, setErrors] = React.useState<ErrorsDateRange>({});

    const handleSubmit = (f: React.FormEvent<HTMLFormElement>) => {
      f.preventDefault();

      const errors: ErrorsDateRange = {};

      if (!dateRange.start) {
        errors.start = ["start date is required"];
      }

      if (!dateRange.end) {
        errors.end = ["end date is required"];
      }

      if (!isDateRangeDefined(dateRange, errors)) {
        setErrors(errors);
        return;
      }

      // compute timestamp (divide by to match transactions format)
      const t1 = new Date(dateRange.start).getTime() / 1000;
      const t2 = new Date(dateRange.end).getTime() / 1000;

      if (t2 < t1) {
        errors.start = ["start must be before end"];
        setErrors(errors);
        return;
      }

      // reset errors and update date
      setErrors({});
      onSuccess(t1, t2);
    };

    return (
      <UI
        errors={errors}
        dateRange={dateRange}
        setDateRange={setDateRange}
        handleSubmit={handleSubmit}
      />
    );
  };

export default DateRangeHeadless;
