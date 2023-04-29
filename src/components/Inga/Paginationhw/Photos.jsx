import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import "./App.css"

export default function Photos(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

  useEffect(() => {
     const endOffset = itemOffset + itemsPerPage;
     setCurrentItems(data.slice(itemOffset, endOffset));
     setPageCount(Math.ceil(data.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, data])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='images'>
        {currentItems.map(image => {
            return (
                <div className='image'>
                    <img src={image.url} alt="photo" />
                </div>
            )
        })}
    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName='pagination'
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </>
  );
}
