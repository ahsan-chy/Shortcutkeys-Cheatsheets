import Products from "./Products";

function ProductList({ Productprops }) {
  return Productprops.map((Parmeterproduct, index) => {
    return <Products key={index} ProductDriling={Parmeterproduct} />;
  });
}

export default ProductList;