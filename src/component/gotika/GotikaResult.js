import FillingStationLogo from '../../base/FillingStationLogo';

const GotikaResult = ({ stationData }) => {
    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '13px', textAlign: 'left' }}>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Fuel</th>
                        <th>Price</th>
                        <th>Best Price</th>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td style={{ width: '25px' }}>
                            <FillingStationLogo fillColor='green' />
                        </td>
                        <td>Petrol 95E</td>
                        <td>{stationData.petrol} &ensp;</td>
                        <td>{stationData.petrolBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>Diesel</td>
                        <td>{stationData.diesel} &ensp;</td>
                        <td>{stationData.dieselBestPriceAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GotikaResult;