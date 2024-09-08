import React from 'react'
import "./MyWork.css"
import mywork_data from '../../assets/mywork_data'
const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>
            My Latest Work
        </h1>
        <img src="../../src/assets/theme_pattern.svg" alt="" />

      </div>
      <div className="mywork-container">
{mywork_data.map((work,index)=>{
return (<div>
    <a href={work.w_link} target='_blank' style={{textDecoration:"none"}}>
    <h1>{work.w_name}</h1>
    <img key={index} src={work.w_img}></img>
    <a target='_blank' href={work.w_link}>Link</a>
    </a>
</div>); 

})}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <a href="https://github.com/Papun1111"><img src="../../src/assets/arrow_icon.svg" alt="" /></a>
      </div>
    </div>
  )
}

export default MyWork
