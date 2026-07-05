import { businesses } from "../data/businesses";
import { getTrending, getMostViewed, getTopLiked } from "./ranking";

export function getBusinessesByMode(mode: string) {
  switch (mode) {
    case "top":
      return getTopLiked(businesses);

    case "views":
      return getMostViewed(businesses);

    case "trending":
    default:
      return getTrending(businesses);
  }
}