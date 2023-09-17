import React, { useEffect, useState } from 'react'




const App = () => {
  const [quote,setQuote]=useState("")
  const [author,setAuthor]=useState('')

  useEffect(()=>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote)=>{
        setQuote(quote.content)
        setAuthor(quote.author)
      }
    )
  },[])

  let Handle=()=>{
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote)=>{
        setQuote(quote.content)
        setAuthor(quote.author)
      }
    )

  }


  return (
    <div>
      <p>{quote}</p>
      <small>{author}</small>
      <button onClick={Handle}>Click</button>
      
      
     
    </div>
  )
}

export default App