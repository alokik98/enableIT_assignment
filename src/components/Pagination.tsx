type PaginationProps = {
  totalUsers: number;
  itemsPerPage: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export default function Pagination({
  totalUsers,
  itemsPerPage,
  paginate,
  currentPage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 10) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination_container">
        <a href="!#" onClick={() => handlePrevious()}>
          Previous
        </a>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="text-center p-2 rounded text-xl outline w-[40px] hover:bg-gray-200 hover:text-gray-700"
          >
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <a href="!#" onClick={() => handleNext()}>
          Next
        </a>
      </ul>
    </nav>
  );
}
