import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NesteIcon from './../../resources/neste.ico';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../util/Progress';
import NesteResult from './NesteResult';

const NesteLV = ({ setError, setErrorDescription }) => {
    const [expanded, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();

    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setLoad(true);
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, '/lv/petrol/neste');
        };
        if (isExpanded === false) {
            setStationData(undefined);
        }
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'neste'} onChange={handleChange('neste')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component='span' sx={{ width: '45%', flexShrink: 0 }}>
                        <img src={NesteIcon} alt='Neste' width='20' /> &ensp; Neste Petrol Station
                        {load && <Progress />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component='span'>
                        {stationData && <NesteResult stationData={stationData} />}
                    </Typography>
                </AccordionDetails>
            </Accordion >
        </>
    );
}

export default NesteLV;