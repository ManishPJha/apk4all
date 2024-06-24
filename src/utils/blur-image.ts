import { GetPlaiceholderReturn, getPlaiceholder } from "plaiceholder";
import { getErrorMessage } from "./error-message";

type PlaiceholderResponse = {
  height: number;
  width: number;
} & Omit<GetPlaiceholderReturn, "metadata">;

export const getBlurImageUrl = async (
  imageUrl: string
): Promise<PlaiceholderResponse> => {
  try {
    const request = await fetch(imageUrl);
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer);

    return {
      height,
      width,
      ...plaiceholder,
    };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
