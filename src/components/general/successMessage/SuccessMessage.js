import React from 'react'
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

function SuccessMessage(props) {
    const [open, setOpen] = React.useState(true);
    return (
        <Collapse in={open}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
              <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            >
            {props.msg}
          </Alert>
        </Collapse>
    )
}

export default SuccessMessage