import styled from 'styled-components';
import imagemBackground from '../../src/imagens/background.jpg'

const estiloMenu = styled.div`
  background-color: rgb(25, 25, 25);
  width: 100%;
  color: white;
  padding: 0;
  padding-bottom: 80px;
  margin-top: 40px;

  .banner{
    padding-top: 60px;

    .hover{
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.642);
      cursor: pointer;
      .title{
        width: 65%;
        height: 50%;
        margin: 15% auto;

        h2{
          color: white;
        }
      }
    }

    button{
      z-index: 4;
    }
  }

  .sessoes{
    padding-top: 0;
    margin-top: 0;
    h2{
      text-align: center;
      font-size: 50px;
      margin-bottom: 100px;
      span{
        color: rgb(31, 128, 255);
      }
    }
  }

  .blog{
    max-width: 1600px;
    margin: 0 auto;
    .title{
      max-width: 1250px;
      margin: 0 auto;
    }
    h2{
      
    }
  }

  img{
    border-radius: 10px;
  }
`;

export default estiloMenu;