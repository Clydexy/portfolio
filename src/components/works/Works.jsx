import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "https://img.icons8.com/ios-glyphs/30/000000/tuition--v1.png",
      title: "Educator",
      desc:
        "Rich experience as an instructor, teaching assistant and tutor teaching programming.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "https://img.icons8.com/ios-glyphs/90/000000/camera--v1.png",
      title: "Cinematographer",
      desc:
        "BTEC L2 Media Student. Various experiences in filming and editing.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "https://img.icons8.com/ios-glyphs/90/000000/code.png",
      title: "Programmer",
      desc:
        "Passionate programmer with experience in Swift, Python, HTML/CSS",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
    : setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0);
  }
  return (
    <div className="works" id="works">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map(d=>(
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                    <p>
                      {d.desc}
                    </p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
          ))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right " alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
