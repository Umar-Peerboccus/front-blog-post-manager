import { Snackbar } from "@mui/material";
import { DisplayNotificationProps } from "../models/props/DisplayNoticationProps";

export default function DisplayNotification({ notificationDetail, handleCloseNotification } : DisplayNotificationProps)
{    
    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={notificationDetail.open}
                autoHideDuration={5000}
                onClose={handleCloseNotification}
                message={notificationDetail.message}
            />
        </>
    )
}