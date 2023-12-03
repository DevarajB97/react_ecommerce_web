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

const CategoriesElectronics = () => {
  return (
    <Container>
      <CategoryItem item={categories[15]} key={categories[15].id} />
      <CategoryItem item={categories[16]} key={categories[16].id} />
      <CategoryItem item={categories[17]} key={categories[17].id} />
    </Container>
  );
};

export default CategoriesElectronics;
