export function getPageRange(current: number, total: number, maxVisible = 5): (number | string)[] {
  const pages: (number | string)[] = [];

  if (total <= maxVisible) {
    // Nếu tổng số trang nhỏ hơn hoặc bằng maxVisible → hiển thị hết
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const firstPage = 1;
  const lastPage = total;

  // 🟦 Khi đang ở các trang đầu
  if (current <= 3) {
    pages.push(1, 2, 3, 4, "...", lastPage);
    return pages;
  }

  // 🟨 Khi đang ở các trang cuối
  if (current >= total - 2) {
    pages.push(firstPage, "...", total - 3, total - 2, total - 1, lastPage);
    return pages;
  }

  // 🟥 Khi ở giữa → luôn có 1 và trang cuối
  pages.push(firstPage, "...", current - 1, current, current + 1, "...", lastPage);

  return pages;
}