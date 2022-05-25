import { DateRange, ErrorsDateRange } from "./type";

export const isDateRangeDefined = (
  d: Partial<DateRange>,
  errors: ErrorsDateRange
): d is DateRange => Object.keys(errors).length === 0;

export const isETHAddress = (s: string): boolean => {
  const r = s.match(/^0x[^ ]+$/);

  if (!r) {
    return false;
  }

  return r.length > 0;
};
