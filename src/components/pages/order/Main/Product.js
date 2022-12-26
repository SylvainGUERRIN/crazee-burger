import styled from "styled-components";

export default function Product({imageSource, title, price}) {
  return (
    <ProductStyled className="produit">
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
            <div className="description">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
                <button className="add-button">Ajouter</button>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
    width: 240px;
    height: 330px;
    background-color: red;

    .image{
        width: 100px;
        height: auto;
        img{
        width: 100%;
        height: 100%;
        }
    }
`;