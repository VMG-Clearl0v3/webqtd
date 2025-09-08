export function getPageRange(current: number, total: number, maxButtons: number = 5) {
  const half = Math.floor(maxButtons / 2);
  const start = Math.max(current - half, 1);
  const end = Math.min(start + maxButtons - 1, total);

  // Điều chỉnh start nếu end gần total
  const adjustedStart = Math.max(end - maxButtons + 1, 1);

  const pages: number[] = [];
  for (let i = adjustedStart; i <= end; i++) {
    pages.push(i);
  }
  return pages;
}