import { getErrorMessage } from "@/utils/error-message";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const path = req.nextUrl.searchParams.get("path");

  if (typeof path !== "string" || !path) {
    return NextResponse.json({
      status: 400,
      message: "no path provided",
    });
  }

  try {
    revalidatePath(path);
    return NextResponse.json({
      status: 201,
      message: `revalidated path ${path}`,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `revalidation failed at path ${path}`,
      error: getErrorMessage(error),
    });
  }
};
