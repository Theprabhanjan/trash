
import { useNavigate } from "react-router-dom";


const InfoContextProvider = (props) =>{
    const navigate = new useNavigate()

    const info ={navigate}
    return(
        <InfoContext.Provider value={info}>
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoContextProvider