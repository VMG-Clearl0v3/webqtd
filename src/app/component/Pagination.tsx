"use client";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    // cuộn lên đầu trang mượt mà
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-2 py-6">
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
        >
          Trước
        </button>
      )}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 rounded-sm font-medium transition ${
            currentPage === index + 1
              ? "bg-blue-900 text-white border border-blue-900"
              : "bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
        >
          Sau
        </button>
      )}
    </div>
  );
}