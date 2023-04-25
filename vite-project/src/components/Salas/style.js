import styled from "styled-components";

const Estilosalas = styled.div`
  background-color: rgb(35, 35, 35);
  border-radius: 10px;
  margin-bottom: 10px;
 .salaCinema{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;  

  .sala{
    width: 25%;
    h3{
      font-size: 20px;
      color: white;
    }
  }
  .filmes{
    width: 40%;
    display: flex;
    align-items: center;

    p{
      color: white;
    }
  }

  .hora{
    h4{
      color: white;
    }
  }

  .scrumbs{
   display: flex;
  }
 }
`

export default Estilosalas;