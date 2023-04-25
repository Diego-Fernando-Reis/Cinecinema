import React, {useEffect, useState, useContext} from 'react';
import Cards from '../../molecules/cards';
import Salas from '../Salas';
import Data from '../../molecules/Data';
import Estilosessoes from './style';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../src/Contexts/AuthContext';



function Sessoes(props){
  const {setAuth, authenticate} = useContext(AuthContext)
  let filmes = Get('filmes');
  let sessaoCinema = Get(`sessoes`);
  const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
  const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  const d = new Date();
  const [cartaz, setCartaz] = useState("https://www.themoviedb.org/t/p/original/r5Ru9t6KTNl8iXA7BOSBz5nvZIS.jpg");
  const [diadaSessao, setDiaSessao] = useState("23/01");
  const [filmeSessao, setFilmeSessao] = useState("Viagem à Lua");
  const [rotate, setRotate] = useState('' ? 'rodar' : '')
    return(
      <Estilosessoes>
        <div className="cinema-data">
          <div className='sessoes'>
            <h3>Sessões</h3>
          </div>
          <div className='organizado'>
            <div className='esquerda'>
              <div className='selecione'><h4>Selecione o cinema</h4><i className={`${rotate} fa-solid fa-chevron-right`} onClick={() => setRotate}></i></div>
              <label htmlFor="cinema" className='cinema'>Local </label>
              <select name="cinema" id="cinema" className='cinema'>
                <option value="local1">Local 1</option>
                <option value="local2">Local 2</option>
                <option value="local3">Local 3</option>
                <option value="local4">Local 4</option>
              </select>
            </div>
            <div className="datas">
              <div className="hoje">
                <Data diaSemana='Hoje' diaMes={'23/01'} onclick={()=>setDiaSessao(
                  "23/01"
                )}/>
                <Data diaSemana={weekday[2]} diaMes={'24/01'} onclick={()=>setDiaSessao(
                  "24/01"
                )}/>
                <Data diaSemana={weekday[3]} diaMes={'25/01'} onclick={()=>setDiaSessao(
                  "25/01"
                )}/>
                <Data diaSemana={weekday[4]} diaMes={'26/01'} onclick={()=>setDiaSessao(
                  "26/01"
                )}/>
                <Data diaSemana={weekday[5]} diaMes={'27/01'} onclick={()=>setDiaSessao(
                  "27/01"
                )}/>
                <Data diaSemana={weekday[6]} diaMes={'28/01'} onclick={()=>setDiaSessao(
                  "28/01"
                )}/>
                <Data diaSemana={weekday[0]} diaMes={'29/01'} onclick={()=>setDiaSessao(
                  "29/01"
                )}/>
              </div>
            </div>
          </div>
        </div>
        <div className='filmes'>
          <div className='cardSala'>
            <div className="cardsFilmes">
              <div className='interno'>
              {filmes.map((slide, key)=>{
                  return(
                    <div className='card'>
                      <div className='zoom'>
                        <Cards key={key} src={slide.cartaz} onclick={()=>{setCartaz(slide.cartaz), setFilmeSessao(slide.filme)}}/>
                      </div>
                    </div>
                  )                
                })}
              </div>
            </div>
            <div className='titulo'>
              <h4>Salas</h4>
            </div>
            <div className='divisao'>
            <div className="salas" id='salas'>
              {
                sessaoCinema.map((slide, key)=>{
                  if(slide.dia == diadaSessao && slide.filme == filmeSessao){
                    return(
                      <Link to={authenticate == true ? "/Dashboard" : "/Login"}><Salas key={key} sala={slide.sala} filme={slide.filme} data={slide.dia} hora={slide.hora} /></Link>
                    )
                  }
                })
              }
            </div>
            <div className="filmeEscolhido">
              <Cards src={cartaz}/>
            </div>
            </div>
          </div>
        </div>
      </Estilosessoes>
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


export default Sessoes;