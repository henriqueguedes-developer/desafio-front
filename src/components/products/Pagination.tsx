// src/components/ui/Pagination.tsx
interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}: PaginationProps) => {
  const getVisiblePages = (page: number, total: number, limit = 5) => {

    if (total <= limit) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const half = Math.floor(limit / 2);


    const startCandidate = page - half;
    const endCandidate = page + half;

 
    const start = Math.max(1, Math.min(startCandidate, total - limit + 1));
    const end = Math.min(total, Math.max(endCandidate, limit));

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pages = getVisiblePages(currentPage, totalPages);
  const showStartDots = totalPages > pages.length && pages[0] > 1;
  const showEndDots =
    totalPages > pages.length && pages[pages.length - 1] < totalPages;

  return (
    <div
      className="flex items-center justify-center gap-1 md:gap-2 mt-6 md:mt-8 mb-4"
      style={{
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "18px",
      }}
    >
      {/* Página anterior */}
      <button
        className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base disabled:opacity-40"
        aria-label="Página anterior"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

     
      {showStartDots && (
        <>
          <button
            className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full border border-[#707372] text-[#121212] cursor-pointer text-sm md:text-base"
            style={{ boxShadow: "0px 0px 4px 0px #707372" }}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          <span className="text-[#707372] text-sm md:text-base">...</span>
        </>
      )}

   
      {pages.map((page) => (
        <button
          key={page}
          className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[#121212] cursor-pointer text-sm md:text-base ${
            page === currentPage
              ? "border border-[#707372] font-bold"
              : "border border-transparent hover:text-[#707372]"
          }`}
          style={
            page === currentPage
              ? { boxShadow: "0px 0px 4px 0px #707372" }
              : {}
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

   
      {showEndDots && (
        <>
          <span className="text-[#707372] text-sm md:text-base">...</span>
          <button
            className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full border border-[#707372] text-[#121212] cursor-pointer text-sm md:text-base"
            style={{ boxShadow: "0px 0px 4px 0px #707372" }}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

 
      <button
        className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[#707372] hover:text-[#121212] transition-colors cursor-pointer text-sm md:text-base disabled:opacity-40"
        aria-label="Próxima página"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};
