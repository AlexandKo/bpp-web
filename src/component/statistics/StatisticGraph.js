import { Chart } from "react-google-charts";

export const options = {
    chart: {
        title: "Petrol Price statistics",
        subtitle: "in EUR per liter",
    },
};

export const createStatisticData = (stationStatistic, fuelList) => {
    let data = [fuelList];

    stationStatistic.forEach(element => {
        const tempData = [
            new Date(element.createdDate).toISOString().split('T')[0],
            element?.petrol !== undefined ? element.petrol : null,
            element?.petrolEcto !== undefined ? element.petrolEcto : null,
            element?.petrolPro !== undefined ? element.petrolPro : null,
            element?.diesel !== undefined ? element.diesel : null,
            element?.dieselPro !== undefined ? element.dieselPro : null,
            element?.dieselEcto !== undefined ? element.dieselEcto : null
        ];
        data.push(tempData.filter(x => x != null));
    });
    return data;
};

const StatisticGraph = ({ stationData, fuelList }) => {
    const data = createStatisticData(stationData.stationStatistic, fuelList);
    return (
        <>
            <Chart
                chartType="Line"
                width="95%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}

export default StatisticGraph;