import styled from 'styled-components'

const Estilocardblog = styled.div`
 padding: 15px;
 
 .link{
  text-decoration: none;
 }
 .cardBlog{
  overflow: hidden;
  width: 400px;
  text-align: left;
  box-shadow: 0 3px 24px rgb(0 0 0 / 4%);
  height: 500px;
  background-color: rgb(35, 35, 35);
  border-radius: 8px;

  .imagem{
    height: 250px;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
      z-index: 1;
    }
 }

 .sub{
  z-index: 3;
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: space-between;
  .description{
    p{

    }
  }

  .texto{
      height: 35%;
    h2{
      text-decoration: none;
      color: white;
      font-size: 25px;
      margin-bottom: 20px;

    }

    p{
      color: white;
    }
  }
 }

 .autor{
  display: flex;

  .textos{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  h3{
    font-size: 16px;
    margin-bottom: 0;
    color: white;
  }
  p{
    font-size: 14px;
    color: white;
  }
 }

 }


 
`

export default Estilocardblog;