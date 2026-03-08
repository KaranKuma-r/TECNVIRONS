function Pagination({ page, setPage }) {

  return (
    <div className="pagination">

      <button
        className="pagination-btn"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span className="pagination-page">{page}</span>

      <button
        className="pagination-btn"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );

}

export default Pagination;