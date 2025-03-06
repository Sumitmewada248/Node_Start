import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
    const [products, setProducts] = useState([]);

    const loadData = async () => {
        let api = "http://localhost:4000/products/display";
        const response = await axios.get(api);
        setProducts(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleImageClick = (productIndex, image) => {
        setProducts((prevProducts) => {
            const newProducts = [...prevProducts];
            newProducts[productIndex].defaultImages = image;
            return newProducts;
        });
    };

    const ans = products.map((key, index) => {
        return (
            <tr key={index}>
                <td>{key.product}</td>
                <td>{key.brand}</td>
                <td>{key.price}</td>
                <td>{key.quantity}</td>
                <td>
                    {key.images.map((key1, imgIndex) => (
                        <img
                            key={imgIndex} src={`http://localhost:4000/${key1}`} width="40px"  height="40px"  alt="img"  onMouseMove={() => handleImageClick(index, key1)} style={{ cursor: "pointer" ,display:"flex"}}
                        />
                    ))}
                </td>
                <td>
                    <img
                        src={`http://localhost:4000/${key.defaultImages}`}
                        width="200px"
                        height="200px"
                        alt="img"
                    />
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1>Display</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </>
    );
};

export default Display;

