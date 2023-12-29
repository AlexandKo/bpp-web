import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViadaIcon from './../../resources/viada.png';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../util/Progress';
import ViadaResult from './ViadaResult';

const ViadaLV = ({ setError, setErrorDescription }) => {
    const [expanded, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();

    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setLoad(true);
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, '/lv/petrol/viada');
        };
        if (isExpanded === false) {
            setStationData(undefined);
        }
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'viada'} onChange={handleChange('viada')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component='span' sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={ViadaIcon} alt='Viada' width='20' /> &ensp; Viada Petrol Station
                        {load && <Progress />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        {stationData && <ViadaResult stationData={stationData} />}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ViadaLV;