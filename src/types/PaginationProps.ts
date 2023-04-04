export type PaginationProps = {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
};

export type PageButtonProps = {
  pageNumber: number;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
