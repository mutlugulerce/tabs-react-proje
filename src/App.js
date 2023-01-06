import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


const App = () => {
const [loading, setLoading] = useState(true)
const [personInfo,setPersonInfo] = useState([])
const [value,setValue] = useState(0)

const fetchPerson = async () => {
    const res = await fetch(url)
    const newPersonInfo =await res.json()
    setPersonInfo(newPersonInfo)
    setLoading(false)
}
useEffect(() => {
    fetchPerson()
},[])

if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

const {title,dates,duties,company} = personInfo[value]

return(<section className='section'>
<div className='title'>
    <h2>Deneyimler</h2>
    <div className='underline'></div>
</div>
<div className='jobs-center'>
<div className='btn-container'>
    {personInfo.map((person,index) => {
        return(
            <button key={person.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{person.company}</button>
        )
    })}
</div>
<article>
    <h3>{title}</h3>
    <h4>{company}</h4>
    <p className="job-date">{dates}</p>
    {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
  

  
</article>
</div>
<button type="button" className="btn">
        Daha Fazlası
      </button>
</section>
  
)
}



export default App