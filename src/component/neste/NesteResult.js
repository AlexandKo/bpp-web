import FillingStationLogo from './../../base/FillingStationLogo';

const NesteResult = ({ stationData }) => {
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
                        <td>Neste Futura 95</td>
                        <td>{stationData.petrol} &ensp;</td>
                        <td>{stationData.petrolBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='green' />
                        </td>
                        <td>Neste Futura 98</td>
                        <td>{stationData.petrolPro} &ensp;</td>
                        <td>{stationData.petrolProBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>Neste Futura D</td>
                        <td>{stationData.diesel} &ensp;</td>
                        <td>{stationData.dieselBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>Neste Pro Diesel</td>
                        <td>{stationData.dieselPro} &ensp;</td>
                        <td>{stationData.dieselProBestPriceAddress}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default NesteResult;