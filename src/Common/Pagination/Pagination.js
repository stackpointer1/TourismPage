import React from 'react';
const Pagination = ( props ) => {
  const { prevPage, currentPage, indexOfLastItem, nextPage, data, handlePageChange, pageInput,pageNoError } = props;

  return (
    <>
      {pageNoError.error && <span className='nav-error'>{pageNoError.message}</span>}
      <button className='btn-nav' onClick={prevPage} disabled={currentPage === 1}>
        « Prev
      </button>
      <input
        className='page-input'
        type ="number"
        value= {pageInput}
        placeholder={currentPage}
        onChange={(e)=>handlePageChange(e.target.value)}
      />
      <button className='btn-nav' type='button' onClick={nextPage} disabled={indexOfLastItem >= data.length}>
        Next »
      </button>
    </>
  )
}
export default Pagination;
