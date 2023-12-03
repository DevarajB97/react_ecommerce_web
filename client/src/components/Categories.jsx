import styled from "styled-components";
import { genders } from "../data";
import { mobile } from "../responsive";
import CategoryGender from "./CategoryGender";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
  padding: 20px;
  ${mobile({ padding: "0px", gridDirection: "column" })}

`;

const CategoriesMen = () => {
  return (
    <Container>
      <CategoryGender item={genders[0]} key={genders[0].id} />
      <CategoryGender item={genders[1]} key={genders[1].id} />
      <CategoryGender item={genders[2]} key={genders[2].id} />
      <CategoryGender item={genders[3]} key={genders[3].id} />
      <CategoryGender item={genders[4]} key={genders[4].id} />
      <CategoryGender item={genders[5]} key={genders[5].id} />
    </Container>
  );
};

export default CategoriesMen;