import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VirshiIcon from './../../resources/virshi.png';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../util/Progress';
import VirshiResult from './VirshiResult';

const VirshiLV = ({ setError, setErrorDescription }) => {
    const [expanded, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();

    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setLoad(true);
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, '/lv/petrol/virsi');
        };
        if (isExpanded === false) {
            setStationData(undefined);
        }
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'virsi'} onChange={handleChange('virsi')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component='span' sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={VirshiIcon} alt='Virsi' width='20' /> &ensp; Virshi Petrol Station
                        {load && <Progress />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        {stationData && <VirshiResult stationData={stationData} />}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default VirshiLV;