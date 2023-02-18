function beautifyString(str, space) {
    try {
        console.log('beauty', str)
        let json = JSON.parse(str)
        console.log('beauty json', json)
        return JSON.stringify(json, null, space)
    }
    catch (e) {
        return e
    }
}
function compressString(str) {
    let json = JSON.parse(str)
    return JSON.stringify(json, null)
}
function downloadResult(str) {
try{
    let file = new Blob([str], {type: 'text/plain'});
    const href = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'jsonResult.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return "success"
}
catch(e){
    return e
}
}
export { beautifyString, compressString, downloadResult }