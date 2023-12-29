import FillingStationLogo from '../../util/FillingStationLogo';

const CircleKResult = ({ stationData }) => {
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
                        <td style={{ width: '95px' }}>miles 95</td>
                        <td style={{ width: '65px' }}>{stationData.petrol} &ensp;</td>
                        <td>{stationData.petrolBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='green' />
                        </td>
                        <td>milesPLUS 98</td>
                        <td>{stationData.petrolPro} &ensp;</td>
                        <td>{stationData.petrolProBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>miles D</td>
                        <td>{stationData.diesel} &ensp;</td>
                        <td>{stationData.dieselBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>milesPLUS D</td>
                        <td>{stationData.dieselPro} &ensp;</td>
                        <td>{stationData.dieselProBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='blue' />
                        </td>
                        <td>Gas</td>
                        <td>{stationData.gas} &ensp;</td>
                        <td >{stationData.gasBestPriceAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CircleKResult;