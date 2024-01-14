import StationSelect from '../../base/StationSelect';

const Statistics = ({ setError, setErrorDescription }) => {

    return (
        <div>
            <StationSelect
                setError={setError}
                setErrorDescription={setErrorDescription} />
        </div>
    );
}

export default Statistics;