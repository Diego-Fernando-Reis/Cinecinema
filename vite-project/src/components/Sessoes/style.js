import styled from 'styled-components'

const Estilosessoes = styled.div`
 max-width: 1400px;
 margin: 0 auto;
 margin-bottom: 150px;
 .cinema-data{
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  .organizado{
    display: flex;
    width: 100%;
  }

  .esquerda{
    padding: 15px 22px;
    background-color: rgb(35, 35, 35);
    border-radius: 10px;
    margin-bottom: 20px;
    width: 30%;
    margin-right: 2%;
    .cinema{
      display: none;
    }
    .selecione{
      display: flex;
      position: relative;
      i{
        position: absolute;
        right: 0;
        top: 20%;
        cursor: pointer;
      }
      .rodar{
        transform: rotate(90deg);
      }
    }
    h4{
    }
  }
  .datas{
    width: 70%;
    padding: 15px 20px;
    background-color: rgb(35, 35, 35);
    border-radius: 10px;
    margin-bottom: 20px;
   .hoje{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
    }
    .data{
      margin-right: 20px;
      border-radius: 5px;
      color: black;
      padding: 0;
      width: 80px;
      height: 40px;
     cursor: pointer;
     h3{
      font-size: 16px;
      margin-bottom: 1px;
      color: rgb(177, 177, 177);
      text-align: center;
     }
     h2{
      font-size: 14px;
      margin-bottom: 0;
      color: rgb(177, 177, 177);
      text-align: center;
     }
     :hover{
      background-color: rgb(194, 220, 255);
      transition: 0.5s;
      h3{
        color: rgb(31, 128, 255);
        font-weight: bold;
        
      }
      h2{
        color: rgb(31, 128, 255);
        font-weight: 600;
      }
     }
    }
   }
  }
 }

 .filmes{
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  padding: 0 20px;

  a{
    text-decoration: none;
  }

  .cardsFilmes{
   
   margin-bottom: 20px;
   padding: 8px;
   height: 380px;
   overflow-x: scroll;
   ::-webkit-scrollbar {
      height: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
    }
    .interno{
      display: flex;
      width: 2200px
    }
   .card{
    width: 180px;
    height: 300px;
    border: none;
    position: relative;
    border-radius: 8px;
    transition: 0.5s;
    margin-top: 12px;
    background-color: transparent;
    margin-right: 30px;
    .zoom{
      position: relative;
      border-radius: 8px;
      transition: 0.5s;
      border: 1px solid black;
      background-color: transparent;
      border: none;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        :hover{
          position: absolute;
          left: -20px;
          top: -20px;
          width: calc(100% + 40px);
          height: calc(100% + 40px);
          border-radius: 8px;
          transition: 0.4s;
          border: 1px solid black;
          z-index: 1;
        }
      }
    }
   }
  }

  .divisao{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .salas{
    height: 100%;
    overflow-y: scroll;
    width: 60%;
    ::-webkit-scrollbar {
      width: 8px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-track {
      display: none;        /* color of the tracking area */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #2196f3;    /* color of the scroll thumb */
      border-radius: 20px;
      :hover{
        background: #1a6099;
        box-shadow: 0 0 10px #1a6099, 0 0 40px #1a6099, 0 0 80px #1a6099;
        transition-delay: 0.2s;
      }
            
    }
  }
  .filmeEscolhido{
    width: 800px;
    position: relative;
    display: flex;
    justify-content: space-around;
      .card{
        padding-top: 100%;
        width: 70%;
        position: relative;
        right: 0;

        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
 }

 @media (max-width: 1000px){
  .filmes{
    grid-template-columns: 100%;
    .cardsFilmes{
      max-width: 100%;
    }
  }
  .filmeEscolhido{
    display: none;
  }
 }
 
`
export default Estilosessoes;
