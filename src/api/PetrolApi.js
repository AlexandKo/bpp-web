import axios from 'axios';
import { BASE_URL } from '../util/settings.js';


const getPetrolData = async (setError, setErrorDescription, setExpanded, setLoad, setStationData, serviceUrl) => {
    await axios
        .get(BASE_URL + serviceUrl)
        .then(res => {
            setLoad(false);
            const id = res.data.id;
            if (id === 200) {
                setStationData(res.data);
            }
            if (id === 404) {
                setErrorDescription(res.data.errorMessage);
                setErrorResponse(setExpanded, setError, setLoad);
            }
        })
        .catch(() => {
            setErrorDescription('Internet Connection problem');
            setErrorResponse(setExpanded, setError, setLoad);
        });
};

function setErrorResponse(setExpanded, setError, setLoad) {
    setExpanded(false);
    setError(true);
    setLoad(false);
}

export { getPetrolData };