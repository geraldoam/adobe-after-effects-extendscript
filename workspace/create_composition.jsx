var files = [
    {'path' : './files/video_01.mp4'},
    {'path' : './files/video_02.mp4'},
    {'path' : './files/video_03.mp4'}
    ];

function createComposition(){
    var myComp = app.project.items.addComp('Composição', 640, 360, 1, 90, 29.97) // Create a composition
    return myComp;
}

function importFootage(file, composition_variable) {
    app.beginUndoGroup("Import file");

    var importOpts = new ImportOptions(File(file));

    var importFootage = app.project.importFile(importOpts);
    var myFootage = myComp.layers.add(importFootage); // Add footage to my composition

    app.endUndoGroup();
};

function main(){
    myComp = createComposition();

    for(var i = 0; i <= 2; i++){
        importFootage(files[i].path, myComp);
    }
}

main();