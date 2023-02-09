import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "../../src/components/Slider";
import Sessoes from "../../src/components/Sessoes";
import Cardsblog from "../../src/components/cardsBlog";
import Estilomenu from './Style'

function Home(){
  let filmes = Get('filmes');

    return(
      <Estilomenu>
        <div className='main'>
          <div className='banner'>
            <Slider>
              {filmes.map((slide, key)=>{
                if(key == 0){
                  return(
                    <div className="carousel-item active h-100">
                      <img className="d-block w-100 h-100" alt="..." key={key} src={slide.cartaz}/>
                    </div>
                  )
                }else{
                  return(
                    <div className="carousel-item h-100">
                      <img className="d-block w-100 h-100" alt="..." key={key} src={slide.cartaz}/>
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
            <Cardsblog />
          </div>
        </div>
      </Estilomenu>
      
    )
}

function Get(endpoint){
  const [filmes, setFilmes] = useState([])
  let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`

  useEffect(()=> {
    axios
    .get(url)
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(filmes)
}

function Post(endpoint){
  const [filmes, setFilmes] = useState([])
  let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`

  useEffect(()=> {
    axios
    .post(url)
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(filmes)
}

function Put(endpoint){
  const [filmes, setFilmes] = useState([])
  let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`

  useEffect(()=> {
    axios
    .put(url)
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(filmes)
}

function Delete(endpoint){
  const [filmes, setFilmes] = useState([])
  let url = `https://api-cinema-a8oa.onrender.com/${endpoint}`

  useEffect(()=> {
    axios
    .delete(url)
    .then((resposta) => setFilmes(resposta.data))
    .catch((erro) => console.log(erro));
  }, [])

  return(filmes)
}

export default Home;