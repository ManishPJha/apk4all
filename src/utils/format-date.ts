import { format, FormatOptions } from "date-fns";

export function formatDate(
  date: Date,
  customFormatStr: string = "yyyy-MM-dd",
  isHMSFormat: boolean = false,
  formatOptions?: FormatOptions
): string {
  const formatStr = isHMSFormat ? `yyyy-MM-dd HH:mm:ss` : customFormatStr;
  return format(date, formatStr, formatOptions);
}
