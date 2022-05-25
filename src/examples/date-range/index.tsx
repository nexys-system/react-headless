import React from "react";

import DateRange from "../../components/form/date-range";

export default () => {
  const [dateRange, setDateRange] = React.useState<
    { t1: number; t2: number } | undefined
  >();

  return (
    <>
      <h1>Date Range</h1>

      <DateRange onSuccess={(t1, t2) => setDateRange({ t1, t2 })} />

      {dateRange && (
        <p>
          Picked dates are {new Date(dateRange.t1 * 1000).toLocaleDateString()}{" "}
          and {new Date(dateRange.t2 * 1000).toLocaleDateString()}
        </p>
      )}
    </>
  );
};
