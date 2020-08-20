var mainComp = app.project.activeItem;
var mainLayer = mainComp.layer(1);

var mainWindow = new Window("palette", "Add Title and Cut", undefined);

var groupOne = mainWindow.add("group", undefined, "Group One");
groupOne.orientation = "column";

groupOne.add("statictext", undefined, "This script allows you to add a title and cut your video.")
var titleName = groupOne.add("editText", undefined, "Title of Video.");
var titleDuration = groupOne.add("editText", undefined, "Duration of title.")

var cutOne = groupOne.add("editText", undefined, "Cut Point 1");
var cutTwo = groupOne.add("editText", undefined, "Cut Point 2");

var groupTwo = mainWindow.add("panel", undefined, "Options");
groupTwo.orientation = "row";

var startButton = groupTwo.add("button", undefined, "Start");
var cancelButton = groupTwo.add("button", undefined, "Cancel");

startButton.onClick = function(){
    app.beginUndoGroup("Tutorial");
    doThigs();
}

cancelButton.onClick = function(){
    mainWindow.close();
}

function doThigs(){
    var compDuration = mainComp.duration;
    var titleSeconds = parseInt(titleDuration.text);
    var cutOneSeconds = parseInt(outOne.text);
    var cutTwoSeconds = parseInt(cutTwo.text);

    var titleText = mainComp.layers.addText(titleName.text);
    titleText.outPoint = titleSeconds;

    var middleLayer = mainLayer.duplicate();
    var topLayer = middleLayer.duplicate();

    mainLayer.outPoint = cutOneSeconds;
    middleLayer.inPoint = cutOneSeconds;
    middleLayer.outPoint = cutTwoSeconds;
    topLayer.inPoint = cutTwoSeconds;
    topLayer.outPoint = compDuration;
    mainWindow.close();
    app.endUndoGroup("Tutorial");
}

mainWindow.show();
mainWindow.center();