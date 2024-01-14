import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GotikaIcon from './../../resources/gotika.png';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../base/Progress';
import GotikaResult from './GotikaResult';

const GotikaLV = ({ setError, setErrorDescription }) => {
    const [expanded, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();


    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setLoad(true);
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, '/lv/petrol/gotika');
        };
        if (isExpanded === false) {
            setLoad(false);
            setStationData(undefined);
        }
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'gotika'} onChange={handleChange('gotika')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component='span' sx={{ width: '45%', flexShrink: 0 }}>
                        <img src={GotikaIcon} alt='Gotika' width='20' /> &ensp; Gotika Auto Petrol
                        {load && <Progress />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        {stationData && <GotikaResult stationData={stationData} />}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default GotikaLV;