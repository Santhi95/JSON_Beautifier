import React, { useEffect, useRef } from "react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import FormControl from '@mui/material/FormControl';
import BButtonGroup from "./BButtonGroup";
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const JSONBeautifier = (props) => {

    const { state, dispatch } = props
    const textRef = useRef(null)
    const fabStyleClear = {
        position: 'absolute',
        top: 16,
        right: 16,
    };
    const fabStyle = {
        position: 'absolute',
        top: 16,
        right: 80,
    };
    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }
    useEffect(() => {
        textRef.current.focus()
    }, [])

    return (<>
        {state.copied && <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={true}
            onClose={() => { dispatch({ type: "CLOSE_COPIED_INFO" }) }}
            message="Copied to clipboard!"
            key={"snackbar"}
            TransitionComponent={TransitionRight}
        />}
        {state.downloaded && <Snackbar
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={true}
            onClose={() => { dispatch({ type: "CLOSE_DOWNLOADED_INFO" }) }}
            message="JSON file downloaded!"
            key={"snackbar"}
            TransitionComponent={TransitionRight}
        />}
        {state.error && <Alert severity="error">{`Invalid JSON,${state.error}!`}</Alert>}
        <Box
            sx={{
                marginTop: 2,
                // paddingLeft: 4,
                paddingTop: '64px',
                width: "100%",
                display: {
                    lg: 'grid'
                },
                gridTemplateColumns: '3fr 1fr',
            }}>
            <FormControl sx={{
                // marginLeft: '30px',
                minWidth: '150px',
                maxWidth: '800px',
                display: 'block',
                flexGrow: 0,
                flexShrink: 0,
            }} >
                <TextField
                    id="outlined-multiline"
                    label="Paste a valid JSON"
                    multiline
                    fullWidth
                    value={state.stringInput}
                    onChange={(e) => dispatch({ type: "SET_INPUT", string: e.target.value })}
                    inputRef={textRef}
                    inputProps={{ style: { height: '60vh', overflow: 'scroll' } }}
                />

                <IconButton aria-label="copy" size="small" sx={fabStyle} onClick={() => {
                    try {
                        navigator.clipboard.writeText(state.stringInput)
                        dispatch({ type: "COPIED" })
                    }
                    catch (e) {
                        dispatch({ type: "NOTIFY", string: e })
                    }
                }}>
                    <ContentCopyIcon />
                </IconButton>
                <IconButton aria-label="clear" size="small" sx={fabStyleClear} onClick={() => dispatch({ type: "RESET" })} >
                    <ClearIcon />
                </IconButton>
            </FormControl>
            <Box sx={{
                marginTop: 2,
                marginLeft: '22px',
                width: '100%',
                display: 'flex',
                flexDirection: { lg: 'column' },
                flexWrap: 'wrap',

            }}>
                <BButtonGroup {...props} />
            </Box>
        </Box>
    </>
    );
}

export default JSONBeautifier