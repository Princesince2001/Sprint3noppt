import { FETCH_PDF_REQUEST,fetchPdfSuccess,fetchPdfFailure } from "../actions/FetchPdfAction";
import axios from "axios";

const fetchPdfApi=({dispatch})=>(next)=>async(action)=>{
    const topicId = "65d5b802-afc2-49fa-ab17-0295d91c01a5"; // Hardcoded topic ID
    if(action.type===FETCH_PDF_REQUEST){
        try{
        const response=await axios.get(`http://localhost:5199/lxp/course/topic/${topicId}/materialtype/${action.payload}`);

        console.log('API Response:',response.data);
        dispatch(fetchPdfSuccess(response.data));
        console.log("successfullresponse",response.data);
        }catch(error){
            console.log("API Error",error.message);
            dispatch(fetchPdfFailure(error.message));
        }
      
    }
    return next(action);
}
export default fetchPdfApi;
