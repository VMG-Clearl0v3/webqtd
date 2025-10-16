import { LucideIcon, Newspaper, Box, PiggyBank } from "lucide-react";

export const breadcrumbLabels: Record<
  string,
  { label: string; icon?: LucideIcon }
> = {
  "cho-vay": { label: "Cho vay",icon: Box },
  "tin-tuc": { label: "Tin tức", icon: Newspaper },
  "gioi-thieu": {label: "Giới thiệu" },
  "tien-gui": { label: "Tiết kiệm", icon: PiggyBank },
};