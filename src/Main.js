import { useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FlagLatvia from './resources/flag_Latvia.ico';
import FlagLithuania from './resources/flag_Lithuania.ico';
import NesteLV from "./component/neste/NesteLV";
import CircleK from "./component/circlek/CircleK";
import GotikaLV from "./component/gotika/GotikaLV";
import ViadaLV from "./component/viada/ViadaLV";
import VirshiLV from "./component/virshi/VirshiLV";
import Alert from '@mui/material/Alert';
import Statistics from "./component/statistics/Statistics";
import Stats from  "./resources/stats.ico";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const flagLatvia = () => {
    return (
        <img src={FlagLatvia} alt='Latvia' width='20' />
    );
}


const flagLithuania = () => {
    return (
        <img src={FlagLithuania} alt='Latvia' width='20' />
    );
}

const statisticIcon = () => {
    return (
        <img src={Stats} alt='Statistics' width='20' />
    );
}

const Main = () => {
    const [value, setValue] = useState(0);
    const [error, setError] = useState(false);
    const [errorDescription, setErrorDescription] = useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '55%', height: '50%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab icon={flagLatvia()} iconPosition="start" label="Latvia" {...a11yProps(0)} />
                        <Tab icon={flagLithuania()} iconPosition="start" label="Lithuania" {...a11yProps(1)} />
                        <Tab icon={statisticIcon()} iconPosition="start" label="Statistics" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <CircleK
                        country='LV'
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                    <GotikaLV
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                    <NesteLV
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                    <ViadaLV
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                    <VirshiLV
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <CircleK
                        country='LT'
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Statistics
                        setError={setError}
                        setErrorDescription={setErrorDescription} />
                </CustomTabPanel>
            </Box>
            {error &&
                <div style={{ position: 'absolute', left: '0', bottom: '0' }}>
                    <Alert onClose={() => { setError(false) }} severity="error">{errorDescription}</Alert>
                </div>
            }
        </div>

    );
}

export default Main; 