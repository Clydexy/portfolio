import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
  featuredPortfolio,
  projectsPortfolio,
  cinematographyPortfolio,
  webappPortfolio,
  communityPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list =[
    {
        id: "featured",
        title: "Featured",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "cinematography",
        title: "Cinematography",
    },
    {
        id: "webapp",
        title: "Web and App Development",
    },
    {
        id: "community",
        title: "Community Service",
    },
];

useEffect(() => {
  switch(selected){
    case "featured":
      setData(featuredPortfolio)
      break
    case "projects":
      setData(projectsPortfolio)
      break
    case "cinematography":
      setData(cinematographyPortfolio)
      break
    case "webapp":
      setData(webappPortfolio)
      break
    case "community":
      setData(communityPortfolio)
      break
    default:
      setData(featuredPortfolio)
  }
}, [selected])
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>
        <div className="container">
          {data.map((d)=>(
            <div className="item">
            <img src={d.img} alt=""/>
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
    </div>
  )
}
