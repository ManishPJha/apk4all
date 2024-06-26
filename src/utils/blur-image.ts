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
    const buffer = await fetch(imageUrl).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

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
    throw new Error(`plaiceholder error: ${getErrorMessage(error)}`);
  }
};
