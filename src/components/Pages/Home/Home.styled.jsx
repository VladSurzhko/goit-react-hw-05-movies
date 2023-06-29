import styled from 'styled-components';

export const SectionTopMovies = styled.section`
  // padding: 20px;
  // width: 1440px;
  // margin: 0 auto;
  // background-color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const ListTopMovies = styled.ul`
list-style-type: none;
padding: 0;
margin: 0;
& a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: grey;
  &:hover {
    color: black;
  }
}
`;
export const MoviesText = styled.li`
display: flex;
  flex-direction: column;
  gap: 8px;
  color: black
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
`;

// export const Links = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   color: black
//   font-size: 18px;
//   font-weight: 600;
//   text-decoration: none;
// `;