import React from 'react'
const QuoteBox = ({cardInfo}) => {
  return (
    <div className='container__quoteBox'>
       <div className="container__blockquote">
            <blockquote>{cardInfo.quote} </blockquote> {/*<span><i className="fa fa-address-card">Icon</i></span> pendiente library icons*/}
       </div>
       <div className="container__author" ><p>{cardInfo.author}</p></div>
    </div>
  )
}
export default QuoteBox