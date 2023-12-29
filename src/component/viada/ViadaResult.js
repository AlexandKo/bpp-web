import FillingStationLogo from '../../util/FillingStationLogo';

const ViadaResult = ({ stationData }) => {
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
                        <td style={{ width: '50px' }}>{stationData.petrolEcto} &ensp;</td>
                        <td >{stationData.petrolEctoBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='green' />
                        </td>
                        <td>Petrol 98E</td>
                        <td>{stationData.petrolPro} &ensp;</td>
                        <td >{stationData.petrolProBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='red' />
                        </td>
                        <td style={{ width: '70px' }}>Petrol E85</td>
                        <td>{stationData.petrolEco} &ensp;</td>
                        <td >{stationData.petrolEcoBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>Diesel</td>
                        <td>{stationData.diesel} &ensp;</td>
                        <td >{stationData.dieselBestPriceAddress}</td>
                    </tr>
                    <tr style={{ border: '1px solid #dddddd' }}>
                        <td>
                            <FillingStationLogo fillColor='black' />
                        </td>
                        <td>Diesel FX</td>
                        <td>{stationData.dieselEcto} &ensp;</td>
                        <td >{stationData.dieselEctoBestPriceAddress}</td>
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

export default ViadaResult;