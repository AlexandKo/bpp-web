import CircularProgress from '@mui/material/CircularProgress';

const Progress = () => {
    return (
        <div style={{ display: 'inline-block', position: 'absolute', left: '50%' }}>
            <CircularProgress size="2rem" />
        </div>
    );
}

export default Progress;