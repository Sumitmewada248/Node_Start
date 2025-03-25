import { useState } from "react";
import axios from "axios";

const Category = () => {
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let api = "http://localhost:5000/product/category";
        axios.post(api, { category: category }).then((res) => {
            console.log(res.data);
        });
        setCategory("");
    };

    return (
        <>
            <h1>Category</h1>

            Enter any category{" "}
            <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <br />

            <button onClick={handleSubmit}>submit</button>

        </>
    );
};
export default Category;

