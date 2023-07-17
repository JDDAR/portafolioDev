import { useState } from "react";

function EventTemes() {
    const [isEstructureT2, setIsEstructureT2] = useState(false);
    return (
        <p className={`estructure ${isEstructureT2 && "EstructureT2"}`} onClick={() => setIsEstructureT2(!isEstructureT2)} >E</p>
    )
}
export default EventTemes