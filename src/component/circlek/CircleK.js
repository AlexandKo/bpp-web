import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleKIcon from './../../resources/circlek.ico';
import { getPetrolData } from '../../api/PetrolApi';
import Progress from '../../util/Progress';
import CircleKResult from './CircleKResult';

const urls = [
    { id: 'LV', url: '/lv/petrol/circlek' },
    { id: 'LT', url: '/lt/petrol/circlek' }
];

const CircleK = ({ country, setError, setErrorDescription }) => {
    const [expanded, setExpanded] = useState(false);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState();

    const link = urls.find(url => url.id === country).url;

    const handleChange = (panel) => (event, isExpanded) => {
        if (isExpanded) {
            setLoad(true);
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, link);
        };
        if (isExpanded === false) {
            setStationData(undefined);
        }
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Accordion expanded={expanded === 'circleK'} onChange={handleChange('circleK')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component='span' sx={{ width: '33%', flexShrink: 0 }}>
                        <img src={CircleKIcon} alt='CircleK' width='20' /> &ensp; CircleK Petrol Station
                        {load && <Progress />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails component='span'>
                    <Typography component='span'>
                        {stationData && <CircleKResult stationData={stationData} />}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default CircleK;