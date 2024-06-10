function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("starting", url);
        setTimeout(() => {
            let data = "dummy data";
            console.log("fetched Data", data);
            resolve(data);
        }, 3000);
        console.log("end")
    })
}

function writedata(data){
    return new Promise(function(resolve,reject){
        console.log("starting", data);
        setTimeout(() => {
            let filename = "result.txt";
            console.log("written Data");
            resolve(filename);
        }, 3000);
        console.log("end")
    })
}

function uploaddata(file,url){
    return new Promise(function(resolve,reject){
        console.log("starting", file, "from", url);
        setTimeout(() => {
            let result = "Success";
            console.log("Upload done");
            resolve(result);
        }, 3000);
        console.log("end")
    })
}


let fetchpromise = fetchdata("www.google.com");
fetchpromise.then(function processfetch(value) {
    let writepromise = writedata(value);
    writepromise.then(function processWrite(value) {
        let uploadpromise = uploaddata(value);
        uploadpromise.then(function processUpload(value) {
            console.log(value);
        })
    })
})

console.log(fetchpromise)