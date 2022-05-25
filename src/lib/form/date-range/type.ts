export interface DateRange {
  start: string;
  end: string;
}

export type ErrorsDateRange = { [k in keyof DateRange]?: string[] };

export interface UIProps {
  dateRange: Partial<DateRange>;
  setDateRange: (d: Partial<DateRange>) => void;
  handleSubmit: (f: React.FormEvent<HTMLFormElement>) => void;
  errors: ErrorsDateRange;
}
