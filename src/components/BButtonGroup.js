import React from "react";
import Button from '@mui/material/Button';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import CompressIcon from '@mui/icons-material/Compress';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DownloadingIcon from '@mui/icons-material/Downloading';
import ClearIcon from '@mui/icons-material/Clear';
import { beautifyString, compressString, downloadResult } from "../utils/utils";
const BButtonGroup = (props) => {
    const { state, dispatch } = props
    function validateJSON(str) {
        let json = JSON.parse(str)
    }

    const handleClick = (clickedButton) => {
        try {
            if (state.stringInput && state.stringInput.trim()) {
                validateJSON(state.stringInput)
                switch (clickedButton) {
                    case 'Beautify':
                        let beautifiedString = beautifyString(state.stringInput, 2)
                        dispatch({ type: "BEAUTIFY", string: beautifiedString })
                        break;
                    case 'Compress':
                        let compressedString = compressString(state.stringInput)
                        dispatch({ type: "COMPRESS", string: compressedString })
                        break;
                    case 'Download':
                        dispatch({ type: "DOWNLOADING" })
                        let downloadState = downloadResult(state.stringInput)
                        downloadState === 'success' ?
                            dispatch({ type: "DOWNLOADED" })
                            : dispatch({ type: "DOWNLOAD_ERROR", string: downloadState })
                        break;
                    case 'Reset':
                        dispatch({ type: "RESET" })
                }
            }
        }
        catch (e) {
            dispatch({ type: "NOTIFY", string: e })
        }
    }

    return <>
        <Button variant="contained" sx={{ m: 1, marginBottom: { lg: 2 }, minWidth: "120px", maxWidth: "150px" }} endIcon={<DataObjectOutlinedIcon />}
            onClick={() => handleClick('Beautify')}>
            Beautify
        </Button>
        <Button variant="contained" sx={{ m: 1, marginBottom: { lg: 2 }, minWidth: "120px", maxWidth: "150px" }} endIcon={<CompressIcon />}
            onClick={() => handleClick('Compress')}>
            Compress
        </Button>
        <Button variant="contained" sx={{ m: 1, marginBottom: { lg: 2 }, minWidth: "120px", maxWidth: "150px" }} endIcon={state.downloading ? <DownloadingIcon /> : <FileDownloadIcon />}
            onClick={() => handleClick('Download')}>
            {state.downloading ? 'Downloading' : 'Download'}
        </Button>
        <Button variant="contained" sx={{ m: 1, marginBottom: { lg: 2 }, minWidth: "120px", maxWidth: "150px" }} endIcon={<ClearIcon />}
            onClick={() => handleClick('Reset')}>
            Reset
        </Button>
    </>
}
export default BButtonGroup