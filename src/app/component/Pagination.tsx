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
	const handleClick = (page: number) => {
		onPageChange(page);
		window.scrollTo({top: 0, behavior: "smooth"});
	};
  return (
    <div className="flex justify-center items-center gap-2 py-6">
		{currentPage > 1 && (
			<button
			onClick={() => handleClick(currentPage - 1)}
			className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
			>
			Trước
			</button>
		)}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-4 py-2 rounded-sm font-medium transition ${
            currentPage === index + 1 ? "bg-blue-900 text-white border border-blue-900": "bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
		{currentPage < totalPages && (	
	      <button
	        onClick={() => handleClick(Math.min(currentPage + 1, totalPages))}
	        disabled={currentPage === totalPages}
	        className="px-4 py-2 rounded-md font-medium bg-white text-blue-900 border border-white hover:bg-blue-900 hover:text-white transition"
	      >
	        Sau
	      </button>
	    )}
    </div>
  );
}