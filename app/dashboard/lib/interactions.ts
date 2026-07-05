import { Business } from "../types/business";

export function likeBusiness(b: Business) {
  b.likes += 1;
  b.views += 1;
}

export function dislikeBusiness(b: Business) {
  b.dislikes += 1;
}

export function viewBusiness(b: Business) {
  b.views += 1;
}

export function commentBusiness(b: Business) {
  b.comments += 1;
}

export function shareBusiness(b: Business) {
  b.shares += 1;
}