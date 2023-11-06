import React from 'react'

function NoDataFound() {
  return (
    <>
      <div className="blank-plan-container flex v-align-center">
        <figure className="figure-blank-plans">
          <img
            src="https://cdn.policybazaar.ae/quote/new/src/assets/images/noQuote.png"
            alt="no-plan"
          />
          <figcaption>
            <span
              className="title-inner">No results matching your search</span>
            <span className="sub-title-inner">
              Modify filters to get results
            </span>
          </figcaption>
        </figure>
      </div>

    </>
  );

}

export default NoDataFound
