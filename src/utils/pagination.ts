export function getPageRange(current: number, total: number, maxButtons: number = 5) {
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(current - half, 1);
  let end = Math.min(start + maxButtons - 1, total);

  // Điều chỉnh start nếu end gần total
  start = Math.max(end - maxButtons + 1, 1);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
}