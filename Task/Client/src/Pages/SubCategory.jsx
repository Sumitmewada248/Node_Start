import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubCategory = () => {
    const { id: category_id } = useParams();
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");

    useEffect(() => {
        // Fetch categories from the server
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let api = "http://localhost:5000/product/subcategory";
        axios.post(api, { category, subcategory }).then((res) => {
            console.log(res.data);
        });
        setCategory("");
        setSubcategory("");
    };


    return (

        <>
            <h1>SubCategory</h1>
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.category}</option>
                ))}
            </select> <br />

            
            <br />

            Enter any subcategory{" "}
            <input
                type="text"
                name="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
            />
            
            <br />

            <button onClick={handleSubmit}>submit</button>
        </>
    );
}

export default SubCategory;

