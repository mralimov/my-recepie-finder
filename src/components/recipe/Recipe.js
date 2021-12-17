import React, { useState, useContext } from 'react';
// import Icons from '../img/icons.svg';
import RecipeIngredients from './RecipeIngredients';
import StateContext from '../state-context/state-context';
// import Loader from '../Loader';

const Recipe = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const stateCtx = useContext(StateContext);

  const recipeViewClicked = stateCtx.recipeViewClicked;
  const [currentRecipeIngredients, setCurrentRecipeIngredients] =
    stateCtx.currentRecipeIngredients;
  // const bookmakrs = stateCtx.bookmakrs
  const recipeBookmarkHandler = stateCtx.toggleBookmark;
  // console.log(currentRecipeIngredients);

  // useEffect(() => {
  //   const storedToStorage = localStorage.setItem(JSON.stringify(bookmarked));
  //   console.log(storedToStorage);
  // }, []);
  const {
    id,
    image_url,
    cooking_time,
    ingredients = [],
    publisher,
    servings,
    source_url,
    title,
  } = currentRecipeIngredients;
  console.log(currentRecipeIngredients);

  const bookmarkHandler = () => {
    setBookmarked(!bookmarked);
    recipeBookmarkHandler(id);
    // console.log(bookmarked);
  };

  return (
    <>
      <div className='recipe'>
        {!recipeViewClicked && (
          <div className='message'>
            <div>
              {/* <svg>
                <use href={Icons + '#icon-smile'}></use>
              </svg> */}
            </div>
            <p>Start by searching for a recipe or an ingredient. Have fun!</p>
          </div>
        )}
        {/* 
        <!-- <div class="spinner">
          <svg>
            <use href={Icons + "#icon-loader"></use>}
          </svg>
        </div> -->

        <!-- <div class="error">
            <div>
              <svg>
                <use href={Icons + "#icon-alert-triangle}"></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
      </div> -->*/}
        {recipeViewClicked && (
          <>
            <figure className='recipe__fig'>
              <img src={image_url} alt='Tomato' className='recipe__img' />
              <h1 className='recipe__title'>
                <span>{title}</span>
              </h1>
            </figure>
            <div className='recipe__details'>
              <div className='recipe__info'>
                {/* <svg className='recipe__info-icon'>
                  <use href={Icons + '#icon-clock'}></use>
                </svg> */}
                <span className='recipe__info-data recipe__info-data--minutes'>
                  {cooking_time}
                </span>
                <span className='recipe__info-text'>minutes</span>
              </div>
              <div className='recipe__info'>
                {/* <svg className='recipe__info-icon'>
                  <use href={Icons + '#icon-users'}></use>
                </svg> */}
                <span className='recipe__info-data recipe__info-data--people'>
                  {servings}
                </span>
                <span className='recipe__info-text'>servings</span>

                <div className='recipe__info-buttons'>
                  <button className='btn--tiny btn--increase-servings'>
                    {/* <svg>
                      <use href={Icons + '#icon-minus-circle'}></use>
                    </svg> */}
                  </button>
                  <button className='btn--tiny btn--increase-servings'>
                    {/* <svg>
                      <use href={Icons + '#icon-plus-circle'}></use>
                    </svg> */}
                  </button>
                </div>
              </div>

              <div className='recipe__user-generated'>
                {/* <svg>
                  <use href={Icons + '#icon-user'}></use>
                </svg> */}
              </div>
              <button
                className={`btn--round ${bookmarked ? 'bookmarked' : ''}`}
                onClick={bookmarkHandler}
              >
                {/* <svg className=''>
                  <use href={Icons + '#icon-bookmark-fill'}></use>
                </svg> */}
              </button>
            </div>
            <RecipeIngredients title={title} ingredients={ingredients} />;
            <div className='recipe__directions'>
              <h2 className='heading--2'>How to cook it</h2>
              <p className='recipe__directions-text'>
                This recipe was carefully designed and tested by
                <span className='recipe__publisher'>{publisher}</span>. Please
                check out directions at their website.
              </p>
              <a
                className='btn--small recipe__btn'
                href={source_url}
                target='_blank'
              >
                <span>Directions</span>
                {/* <svg className='search__icon'>
                  <use href={Icons + '#icon-arrow-right'}></use>
                </svg> */}
              </a>
            </div>{' '}
          </>
        )}
      </div>
    </>
  );
};

export default Recipe;
