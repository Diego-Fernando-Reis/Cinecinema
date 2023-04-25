import React, {useEffect, useState} from "react";
import axios from "axios";
import Loading from '../../src/components/Loading'
import Slider from "../../src/components/Slider";
import Sessoes from "../../src/components/Sessoes";
import Cardsblog from "../../src/components/CardsBlog";
import Estilomenu from './Style'

function Home(){
  let filmes = Get('filmes');
  const [removeLoading, setRemoveLoading] = useState(false)
    return(

      <Estilomenu>
        {!removeLoading && <Loading />}
        <div className='main'>
          <div className='banner'>
            <Slider>
              {filmes.map((slide, key)=>{
                if(key == 0){
                  return(
                    <div className="carousel-item active h-100">
                      <img className="d-block w-100 h-100" alt="..." key={key} src={slide.banner}/>
                      <div className="hover">
                        <div className="title">
                          <h2 className="text-primary animate__animated animate__fadeInRight animate__delay-1s">{slide.filme}</h2>
                          <p className="animate__animated animate__fadeInRight animate__delay-1s">{slide.sinopse}</p>
                        </div>
                      </div>
                    </div>
                  )
                }else{
                  return(
                    <div className="carousel-item h-100">
                      <img className="d-block w-100 h-100" alt="..." key={key} src={slide.banner}/>
                      <div className="hover">
                        <div className="title">
                          <h2 className="text-primary animate__animated animate__fadeInRight animate__delay-1s">{slide.filme}</h2>
                          <p className="animate__animated animate__fadeInRight animate__delay-1s">{slide.sinopse}</p>
                        </div>
                      </div>
                    </div>
                  )
                }
                                
              })}
            </Slider>
          </div>
          <div className='sessoes'>
            <Sessoes />
          </div>
          <div className='blog'>
            <div className="title">
              <h2>Notícias</h2>
            </div>
            <Cardsblog />
          </div>
        </div>
        
      </Estilomenu>
      
    )
  function Get(endpoint){
    const [filmes, setFilmes] = useState([])
    let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`
  
    useEffect(()=> {
      setTimeout(()=>{
        axios
        .get(url)
        .then((resposta) => {
          setFilmes(resposta.data)
          setRemoveLoading(true)
        })
        .catch((erro) => console.log(erro));
      }, 3000)
    }, [])
  
    return(filmes)
  }
}

export default Home;