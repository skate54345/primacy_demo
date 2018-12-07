const remote = require('electron').remote;
var fs = require("fs");
sampleObject = remote.getGlobal('data')
sampleObject2 = remote.getGlobal('data2')

function jsonify(){


fs.writeFile("./tab1.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
});


fs.writeFile("./tab2.json", JSON.stringify(sampleObject2, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
});

}
