import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://image.tmdb.org/t/p/original//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg");
  height: calc(100vh);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Poster = styled.div`
  background-image: url(https://image.tmdb.org/t/p/original//6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg);
  width: 33.33333333%;
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-left: 12.5%;
`;

const InfoContainer = styled.div`
  width: 40%;
  padding-left: 20px;
  background: rgba(169, 169, 169, 0.6);
`;

const InfoTitle = styled.h1`
  color: #fafafa;
`;

const InfoDetails = styled.div`
  color: #fafafa;
`;

const Card = () => {
  return (
    <Container>
      <Poster />
      <InfoContainer>
        <InfoTitle>Mortal Kombat</InfoTitle>
        <InfoDetails>
          <h3>General</h3>
          <p>
            Un boxeador fracasado descubre un secreto familiar que lo lleva a un
            torneo místico llamado Mortal Kombat donde se encuentra con un grupo
            de guerreros que luchan hasta la muerte para salvar los reinos del
            malvado hechicero Shang Tsung.
          </p>
          <h3>Generos</h3>
          <ul></ul>
        </InfoDetails>
      </InfoContainer>
    </Container>
  );
};

export default Card;
