import Loader from "react-js-loader";
import './style.css';

const Loaderc = ()=>{
    // const [spinnerLoading, setSpinnerLoading] = useState(true);
    return(
        <div style={{ textAlign: "center" }} className='app'>
           <Loader type="spinner-circle" bgColor={"#000000"}  color={"#000000"} size={200} />
            {/* <button onClick={() => setSpinnerLoading(!spinnerLoading)}>Toggle Loader</button> */}
       </div>
    );
}
export default Loaderc;