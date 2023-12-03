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

const CategoriesLaptop = () => {
  return (
    <Container>
      <CategoryItem item={categories[6]} key={categories[6].id} />
      <CategoryItem item={categories[7]} key={categories[7].id} />
      <CategoryItem item={categories[8]} key={categories[8].id} />
    </Container>
  );
};

export default CategoriesLaptop;
