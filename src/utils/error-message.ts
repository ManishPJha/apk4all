export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error && process.env.NODE_ENV !== "development")
    return error.message;
  else if (error instanceof Error && process.env.NODE_ENV === "development")
    return error.stack;
  return "Unknown error";
};
