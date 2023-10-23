import React from "react";
import ReactPaginate from "react-paginate";

function PaginationComponent({ pageCount, onPress }) {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  return (
    <div className="center mt-3">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالى"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link rounded"
        nextLinkClassName="page-link rounded"
        className="pagination"
        breakClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default PaginationComponent;
