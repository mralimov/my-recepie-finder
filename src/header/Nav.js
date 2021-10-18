import React, { Fragment } from 'react';

const Nav = () => {
  return (
    <Fragment>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <button className='nav__btn nav__btn--add-recipe'>
              <svg className='nav__icon'>
                <use href='../img/icons.svg#icon-edit'></use>
              </svg>
              <span>Add recipe</span>
            </button>
          </li>
          <li className='nav__item'>
            <button className='nav__btn nav__btn--bookmarks'>
              <svg className='nav__icon'>
                <use href='../img/icons.svg#icon-bookmark'></use>
              </svg>
              <span>Bookmarks</span>
            </button>
            <div className='bookmarks'>
              <ul className='bookmarks__list'>
                <div className='message'>
                  <div>
                    <svg>
                      <use href='../img/icons.svg#icon-smile'></use>
                    </svg>
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>

                {/* <li className="preview">
                    <a className="preview__link" href="#23456">
                      <figure className="preview__fig">
                        <img src="src/img/test-1.jpg" alt="Test" />
                      </figure>
                      <div className="preview__data">
                        <h4 className="preview__name">
                          Pasta with Tomato Cream ...
                        </h4>
                        <p className="preview__author">The Pioneer Woman</p>
                      </div>
                    </a>
                  </li>  */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
