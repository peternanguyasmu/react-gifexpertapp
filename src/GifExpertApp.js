import { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Michael Jordan']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories = { setCategorias }/>
                {
                    categorias.map((category, i) => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
        </>
    );
}

export default GifExpertApp;