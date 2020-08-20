var jsonFile = File("./ranking.json");

function readJSONFile(file){
    file.open("r");
    var data = file.read();
    data = JSON.parse(data);
    // for(var i in data){
    //     write(i + "equal to" + data[i]);
    // }
    // var videoTitles = data.map((item) => item.videoName);
    var videoTitles = '';
    // for(var i in data){
    //     videoTitles.push(i.position)
    // }
    for (var i=0;i < data.length;i++) {
        videoTitles = videoTitles + data[i].videoName + ',';
    }     
    // alert(videoTitles);
    // alert(Array.from(data));
    var theComposition = app.project.item(1);
    var theTextLayer = theComposition.layers[1];
    theTextLayer.property("Source Text").setValue(videoTitles);

    return videoTitles;
}

readJSONFile(jsonFile)