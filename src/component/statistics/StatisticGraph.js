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
        let tempData = [];
        const fullDate = new Date(element.createdDate);
        const month = fullDate.getMonth() === 0 ? '1' : fullDate.getMonth();

        tempData.push(`${fullDate.getFullYear()}-${month}-${fullDate.getDate()}`);
        if (element?.petrol !== undefined) {
            tempData.push(element.petrol);
        }
        if (element?.petrolEcto !== undefined) {
            tempData.push(element.petrolEcto);
        }
        if (element?.petrolPro !== undefined) {
            tempData.push(element.petrolPro);
        }
        tempData.push(element.diesel);
        if (element?.dieselPro !== undefined) {
            tempData.push(element.dieselPro);
        }
        if (element?.dieselEcto !== undefined) {
            tempData.push(element.dieselEcto);
        }
        data.push(tempData);
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