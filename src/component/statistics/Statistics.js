import { useState } from 'react';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../util/Progress';

const Statistics = ({ setError, setErrorDescription }) => {
    const [, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();

    getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, '/lv/petrol/daily');

    return (
        <div>
            {load && <Progress />}
            {stationData.date}

        </div>
    );
}

export default Statistics;