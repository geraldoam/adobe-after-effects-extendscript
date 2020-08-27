var path = './template.aep';
var jsonFile = File("./ranking.json");

function loadTemplate(path){
    app.open(new File(path));
}

function changeVideoTitle(jsonFile){
    var theComposition = app.project.item(1);

    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoTitles = [];
    for (var i=0;i < data.length;i++) {
        videoTitles.push(data[i].videoName);
    }

    for (var i=0;i < videoTitles.length;i++) {
        var theTextLayer = theComposition.layers[i == 0 ? 1 : i]
        theTextLayer.property('Source Text').setValue(videoTitles[i])
    }
}

function saveProject(){
    app.project.save(File('./projects/final_project.aep'));
};

function main(path, jsonFile){
    loadTemplate(path);
    changeVideoTitle(jsonFile);
    saveProject();
}

main(path, jsonFile);