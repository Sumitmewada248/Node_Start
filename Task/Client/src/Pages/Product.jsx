import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [product, setProduct] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5000/product/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const fetchSubcategories = async (category) => {
        try {
            const response = await axios.get(`http://localhost:5000/product/subcategories`);
            setSubcategories(response.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/product/done", {
                category: selectedCategory,
                subcategory: selectedSubcategory,
                product,
            });
            setMessage(response.data.message);
        } catch (error) {
            console.error("Error inserting product:", error);
        }
    };

    return (
        <div>
            <h1>Product</h1>
            <form onSubmit={handleSubmit}>
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        fetchSubcategories(e.target.value);
                    }}
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>{category.category}</option>
                    ))}
                </select>
                <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                >
                    <option value="">Select a subcategory</option>
                    {subcategories.map((subcategory) => (
                        <option key={subcategory._id} value={subcategory._id}>{subcategory.subcategory}</option>
                    ))}
                </select>
                <br />
                Enter Product
                <input
                    type="text"
                    name="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <br />
                <button type="submit">Insert product</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Product;

