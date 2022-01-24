import styled from "styled-components";
import { Link } from "react-router-dom";


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
    transition: all .3s ease;
`;

const Circle = styled.div`
    width: 225px;
    height: 225px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Container = styled.div`
    flex: 1;
    margin: 15px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    position: relative;

    &:hover ${Image}{
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}/>
                <Link to={`/product/${item._id}`}>
                <Info/>
                </Link>
        </Container>
    );
};

export default Product;
