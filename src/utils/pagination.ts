export function getPageRange(current: number, total: number, maxVisible = 5): (number | string)[] {
  const pages: (number | string)[] = [];

  if (total <= maxVisible) {
    // Nếu tổng số trang nhỏ hơn hoặc bằng maxVisible → hiển thị hết
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  const firstPage = 1;
  const lastPage = total;

  // Khi đang ở các trang đầu
  if (current <= 3) {
    pages.push(1, 2, 3, 4, "...", lastPage);
    return pages.slice(0, maxVisible); // Giới hạn đúng 5 phần tử
  }

  // Khi đang ở các trang cuối
  if (current >= total - 2) {
    pages.push(firstPage, "...", total - 3, total - 2, total - 1, lastPage);
    return pages.slice(pages.length - maxVisible); // Giới hạn đúng 5 phần tử
  }

  // Khi ở giữa
  pages.push(firstPage, "...", current - 1, current, current + 1, "...", lastPage);

  // Giới hạn hiển thị 5 nút (trong đó ... tính là 1)
  // => luôn ưu tiên hiển thị rõ trang hiện tại + hai đầu
  const centered = [firstPage, "...", current - 1, current, current + 1, "...", lastPage];
  return centered.filter((_, i) => i < maxVisible + 1); // giữ lại 5–6 phần tử hợp lý
}