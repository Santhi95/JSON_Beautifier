const reducer = (state, action) => {
    console.log("reducer", state, action)
    switch (action.type) {
        case "SET_INPUT":
            return {
                ...state,
                stringInput: action.string,
                error: '',
                copied: false
            }
        case "BEAUTIFY":
            return {
                ...state,
                stringInput: action.string
            }
        case "COMPRESS":
            return {
                ...state,
                stringInput: action.string
            }
        case 'DOWNLOADING':
            return {
                ...state,
                downloading: true,
                downloaded: false
            }
        case "DOWNLOADED":
            return {
                ...state,
                downloaded: true,
                downloading: false
            }
        case "DOWNLOAD_ERROR":
            return {
                ...state,
                downloaded: false,
                downloading: false,
                error: action.string
            }
        case "CLOSE_DOWNLOADED_INFO":
            return {
                ...state,
                downloaded: false,
                downloading: false,
            }
        case "RESET":
            return {
                ...state,
                stringInput: ""
            }
        case "NOTIFY":
            return {
                ...state,
                error: action.string
            }
        case "COPIED":
            return {
                ...state,
                copied: true
            }
        case "CLOSE_COPIED_INFO":
            return {
                ...state,
                copied: false
            }
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: action.theme
            }
        case "CHANGE_TOOL":
            return {
                ...state,
                activeItem : action.payload.item,
            }
        default:
            return state;
    }
};

export default reducer