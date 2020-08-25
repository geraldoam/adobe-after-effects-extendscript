var path = './template.aep';
var jsonFile = File("./ranking.json");


function loadTemplate(path){
    app.open(new File(path));   // refatorado a forma que abre o projeto, essa eh a forma certa.
}

function changeVideoTitle(jsonFile){

    // seleciona composicao
    var theComposition = app.project.item(1);

    // seleciona os videos nas layers respectivas
    var theTextLayerOne = theComposition.layers[1];
    var theTextLayerTwo = theComposition.layers[2];
    var theTextLayerThree = theComposition.layers[3];

    // le o arquivo json
    jsonFile.open("r");
    var data = jsonFile.read();
    data = JSON.parse(data);

    var videoTitles = [];
    for (var i=0;i < data.length;i++) {
        // refatorado
        videoTitles.push(data[i].videoName);
    }

    theTextLayerOne.property("Source Text").setValue(videoTitles[0]);
    theTextLayerTwo.property("Source Text").setValue(videoTitles[1]);
    theTextLayerThree.property("Source Text").setValue(videoTitles[2]);
}

function main(path){
    loadTemplate(path);
    changeVideoTitle(jsonFile);
}

main(path, jsonFile);