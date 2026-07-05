import { Business } from "../types/business";

export function getTrending(list: Business[]) {
  return [...list].sort(
    (a, b) =>
      (b.likes + b.comments + b.shares) -
      (a.likes + a.comments + a.shares)
  );
}

export function getMostViewed(list: Business[]) {
  return [...list].sort((a, b) => b.views - a.views);
}

export function getTopLiked(list: Business[]) {
  return [...list].sort((a, b) => b.likes - a.likes);
}