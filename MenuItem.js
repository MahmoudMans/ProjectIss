import react from "react";
import img1 from './images/smu.jpg';
const MenuItem = ({id, title, category,img, description}) => {

    return (
        <div>
            <img src={img1} alt={img} width="200"/>
            <h1>{title}</h1>
            <h2>{category}</h2>
            
            <p>{description}</p>
        </div>
    )
}

export default MenuItem