import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { STATION_STATISTIC_LINKS } from '../util/statisticsLinks';
import { getPetrolData } from '../api/PetrolApi';
import Progress from './Progress';
import StatisticGraph from '../component/statistics/StatisticGraph';

export default function StationSelect({ setError,
    setErrorDescription }) {
    const [, setExpanded] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [stationClickValue, setStationClickValue] = useState(0);
    const [load, setLoad] = useState(false);
    const [stationData, setStationData] = useState(undefined);
    const [fuelList, setFuelList] = useState();

    useEffect(() => {
        if (stationData === undefined && stationClickValue !== 0 && fetch) {
            const statisticStationLink = STATION_STATISTIC_LINKS
                .find((link) => link.id === stationClickValue)
                .link;
            getPetrolData(setError, setErrorDescription, setExpanded, setLoad, setStationData, statisticStationLink);
            setFetch(false);
        }
        if (stationData !== undefined && !fetch) {
            setFetch(false);
            setLoad(false);
        }
    }, [stationData, fetch, stationClickValue, load, setError, setErrorDescription, setExpanded, setLoad, setStationData, setStationClickValue]);

    const handleChange = (event) => {
        setFetch(true);
        setLoad(true);
        setStationData(undefined);
        setStationClickValue(event.target.value);
        const stationFuelList = STATION_STATISTIC_LINKS
            .find((link) => link.id === event.target.value)
            .fuel;
        setFuelList(stationFuelList);
    };
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 400 }}>
                <InputLabel htmlFor='all-stations'>Petrol Stations</InputLabel>
                <Select defaultValue=''
                    id='all-stations'
                    label='Petrol Stations'
                    onChange={handleChange}>
                    <ListSubheader>Latvia</ListSubheader>
                    <MenuItem value={1}>CircleK Petrol Station</MenuItem>
                    <MenuItem value={2}>Gotika Auto Petrol Station</MenuItem>
                    <MenuItem value={3}>Neste Petrol Station</MenuItem>
                    <MenuItem value={4}>Viada Petrol Station</MenuItem>
                    <MenuItem value={5}>Virshi Petrol Station</MenuItem>
                    <ListSubheader>Lithuania</ListSubheader>
                    <MenuItem value={6}>CircleK Petrol Station</MenuItem>
                    <ListSubheader>Sweden</ListSubheader>
                    <MenuItem value={7}>CircleK Petrol Station Regular</MenuItem>
                    <MenuItem value={8}>CircleK Petrol Station Automatic</MenuItem>
                </Select>
            </FormControl>
            {load && <Progress />}
            {stationData && <StatisticGraph
                stationData={stationData} 
                fuelList={fuelList}/>}
        </>
    );
}