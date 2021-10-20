import React from 'react';
import Icons from '../img/icons.svg';

const PaginationButton = ({ currentPage, maxPages, setCurrentPage }) => {
  return (
    <div className='pagination'>
      {currentPage > 1 && (
        <button
          className='btn--inline pagination__btn--prev'
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <svg className='search__icon'>
            <use href={Icons + '#icon-arrow-left'}></use>
          </svg>
          <span>Page {currentPage}</span>
        </button>
      )}
      {currentPage < maxPages && (
        <button
          className='btn--inline pagination__btn--next'
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <span>Page {currentPage + 1}</span>
          <svg className='search__icon'>
            <use href={Icons + '#icon-arrow-right'}></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default PaginationButton;
