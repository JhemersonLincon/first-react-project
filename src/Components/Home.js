import shot from "../images/PNG-Zaap/Instagram shot.png";
import Coding from "../images/PNG-Zaap/Coding.png"
import Search from "../images/PNG-Zaap/Search.png";

import Analythics from "../images/PNG-Zaap/Analythics.png";
import Awards from "../images/PNG-Zaap/Awards.png";
import Data from "../images/PNG-Zaap/Data.png";
import styles from "./Home.module.css"
import { Circle } from "./Circle";
import React from 'react';
import About from "./About";

const imgExample = [
  {
    src:Analythics,
    alt: 'analista',
  },
  {
    src:Awards,
    alt: 'analista'
  },
  {
    src:Data,
    alt:'data'
  }
]
const imgS = [
  {
    Photo:shot,
    message:'Photos',

  }, 
  {
  Photo:Coding,
  message:'Pessoa codando'
  }, 
  {
    Photo:Search,
    message:"Pesquisas",
  }
]
export const Home = () => {
  const [count, setCount]= React.useState(0)
  const [imgIlustration, setImgIlustration] = React.useState(shot);

  function IlustrationChange(){
    setTimeout(()=>{
      setImgIlustration(imgS[count])
      if(count < imgS.length - 1) setCount(count +1 )
      else setCount(0)
    },4000)
  }
  IlustrationChange()
  return (
    <>
      <main>
        <section className={styles.homePage}>
          <div className={styles.aboutHomePage}>
            <h1>Photography</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequatur magnam iusto asperiores provident corporis minima maiores corrupti sequi.</p>
            <label >
            <input type="text" placeholder="Your project title"/>
            <button>Start</button>
            </label>

            <div className={styles.homeRedes}>
              <span>Follow Us</span>
              <a href='facebook.com' target="_blank"><i className="fab fa-facebook-f"></i></a>
              <a href='twitter.com' target="_blank"><i className="fab fa-twitter"></i></a>
              <a href='youtube.com' target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className={styles.PhotoExample}>
            <Circle />
            <div className={styles.containerIllustration}>
              {<img className="animeLeft" src={imgIlustration.Photo} alt={imgIlustration.message} />}
            </div>
          </div>
        </section>
        <About />

        <section className={styles.aboutProjects}>
          <div className={styles.contentProjects}>
            <h2>Variables IconS</h2>
            <div>
              <div className={styles.pointer}>
              </div>
              <div className={styles.content}>
                <p>IconS Monetary</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit est recusandae officiis nobis reprehenderit libero consequatur expedita minima.</span>
              </div>
            </div>
            <div>
              <div className={styles.pointer}>
              </div>
              <div className={styles.content}>
                <p>IconS Iteractive</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit est recusandae officiis nobis reprehenderit libero consequatur expedita minima.</span>
              </div>
            </div>
            <div>
              <div className={styles.pointer}>
              </div>
              <div className={styles.content}>
                <p>IconS Social</p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit est recusandae officiis nobis reprehenderit libero consequatur expedita minima.</span>
              </div>
            </div>
          </div>
          <div className={styles.exampleIcons}>
            {imgExample.map((img, index)=>(
            <div key={index} className={styles.contentIcons }> 
              <img  src={img.src} alt={img.alt} />
            </div>))}
          </div>
        </section>
      </main>
    </>
  )
}
