import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const CategoriesShoes = () => {
  return (
    <Container>
      <CategoryItem item={categories[9]} key={categories[9].id} />
      <CategoryItem item={categories[10]} key={categories[10].id} />
      <CategoryItem item={categories[11]} key={categories[11].id} />
    </Container>
  );
};

export default CategoriesShoes;
