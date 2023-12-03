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

const CategoriesGadgets = () => {
  return (
    <Container>
      <CategoryItem item={categories[12]} key={categories[12].id} />
      <CategoryItem item={categories[13]} key={categories[13].id} />
      <CategoryItem item={categories[14]} key={categories[14].id} />
    </Container>
  );
};

export default CategoriesGadgets;
