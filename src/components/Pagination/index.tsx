import { useState } from "react";
import type {  PaginationProps, FetchedDataProps, PageButtonProps } from "../../types";
import * as C from "./styles";


function PageButton({ pageNumber, isActive, onClick }: PageButtonProps) {
  return (
    <C.PageButton isActive={isActive} onClick={onClick}>
      {pageNumber}
    </C.PageButton>
  );
}

export default function Pagination({
  setPageNumber,
  pageNumber,
  fetchedData,
}: PaginationProps & { fetchedData: FetchedDataProps }) {
  const [currentPage, setCurrentPage] = useState<number>(pageNumber);

  const totalPages = fetchedData?.info?.pages || 1;

  const getDisplayedPages = (): number[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return [
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ];
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setPageNumber(newPage);
  };
 
  const renderPageButtons = () => {
    const displayedPages = getDisplayedPages();

    return displayedPages.map((page) => (
      <PageButton
        key={page}
        pageNumber={page}
        isActive={page === currentPage}
        onClick={() => handlePageChange(page)}
      />
    ));
  };

  const renderFirstPageButton = () => {
    if (currentPage > 3) {
      return (
        <PageButton
          pageNumber={1}
          isActive={false}
          onClick={() => handlePageChange(1)}
        />
      );
    }
  };

  const renderLastPageButton = () => {
    if (currentPage < totalPages - 2) {
      return (
        <PageButton
          pageNumber={totalPages}
          isActive={false}
          onClick={() => handlePageChange(totalPages)}
        />
      );
    }
  };

  return (
    <C.PaginationContainer>
      <C.Button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </C.Button>
      {renderFirstPageButton()}
      {renderPageButtons()}
      {renderLastPageButton()}
      <C.Button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </C.Button>
    </C.PaginationContainer>
  );
}
