var path = './template.aep';
var jsonFile = File('./ranking.json');

function loadTemplate(path){
    app.open(new File(path));
}

function changeVideoTitle(jsonFile, startIndex){
    var theComposition = app.project.item(1);

    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoTitles = [];
    for (var i=0;i < data.length;i++) {
        videoTitles.push(data[i].videoName);
    }

    for (var i=0;i < videoTitles.length;i++) {
        var theTextLayer = theComposition.layers[i + startIndex]
        theTextLayer.property('Source Text').setValue(videoTitles[i])
    }
}

function changeVideoMetric(jsonFile, startIndex){
    var theComposition = app.project.item(1);

    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoMetrics = [];
    for (var i=0;i < data.length;i++) {
        videoMetrics.push(data[i].metric);
    }

    for (var i=0;i < videoMetrics.length;i++) {
        var theTextLayer = theComposition.layers[i + startIndex]
        theTextLayer.property('Source Text').setValue(videoMetrics[i])
    }
}

function changeVideoChannel(jsonFile, startIndex){
    var theComposition = app.project.item(1);

    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoChannel = [];
    for (var i=0;i < data.length;i++) {
        videoChannel.push(data[i].channelName);
    }

    for (var i=0;i < videoChannel.length;i++) {
        var theTextLayer = theComposition.layers[i + startIndex]
        theTextLayer.property('Source Text').setValue(videoChannel[i])
    }
}

function saveProject(){
    app.project.save(File('./projects/final_project.aep'));
};

function closeProject(){
    app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
}

function main(path, jsonFile){
    loadTemplate(path);
    changeVideoTitle(jsonFile, 1);
    changeVideoMetric(jsonFile, 4);
    changeVideoChannel(jsonFile, 7)
    saveProject();
    closeProject();
}

main(path, jsonFile);