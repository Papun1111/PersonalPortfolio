import React from 'react'
import "./MyWork.css"
import theme from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data'
import iconarrow from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div className='mywork'>
      <div className="mywork-title">
        <h1>
            My Latest Work
        </h1>
        <img src={theme} alt="" />

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
        <a href="https://github.com/Papun1111"><img src={iconarrow} alt="" /></a>
      </div>
    </div>
  )
}

export default MyWork
