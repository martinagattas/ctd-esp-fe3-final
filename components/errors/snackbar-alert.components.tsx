import { forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface Props {
    open: boolean,
    onClose: () => void,
    severity: AlertProps['severity'],
    error?: string | undefined,
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarAlert({open, onClose, severity, error}: Props) {
    return (
        <Snackbar open={open} onClose={onClose} sx={{
            bottom: 'auto !important', left: 'auto !important', top: '16px !important', width: 'calc(50% - 32px)', display: 'block', position: 'absolute'}}>
            <Alert severity={severity} sx={{ width: '100%' }}>{error}</Alert>
        </Snackbar>
    );
}