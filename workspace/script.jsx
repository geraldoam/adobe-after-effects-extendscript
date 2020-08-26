var path = './template.aep';
var jsonFile = File("./ranking.json");


function loadTemplate(path){
    app.open(new File(path));
}

function changeVideoTitle(jsonFile){
    var theComposition = app.project.item(1);

    var theTextLayerOne = theComposition.layers[1];
    var theTextLayerTwo = theComposition.layers[2];
    var theTextLayerThree = theComposition.layers[3];

    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoTitles = [];
    for (var i=0;i < data.length;i++) {
        videoTitles.push(data[i].videoName);
    }

    theTextLayerOne.property("Source Text").setValue(videoTitles[0]);
    theTextLayerTwo.property("Source Text").setValue(videoTitles[1]);
    theTextLayerThree.property("Source Text").setValue(videoTitles[2]);
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