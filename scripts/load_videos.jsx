var files = [
    {'path' : 'C:/Users/geral/Desktop/VideoProject/videos/video_01.mp4'},
    {'path' : 'C:/Users/geral/Desktop/VideoProject/videos/video_02.mp4'},
    {'path' : 'C:/Users/geral/Desktop/VideoProject/videos/video_03.mp4'}
    ];

function createComposition(){
    var myComp = app.project.items.addComp('Composição', 640, 360, 1, 90, 29.97)// your opened composition
    return myComp;
}

function importFootage(file, composition_variable) {
    app.beginUndoGroup("Import file");

    var importOpts = new ImportOptions(File(file));

    var importFootage = app.project.importFile(importOpts);
    var myFootage = myComp.layers.add(importFootage); // add footage to your composition

    app.endUndoGroup();
};

function main(){
    myComp = createComposition();

    for(var i = 0; i <= 2; i++){
        importFootage(files[i].path, myComp);
    }
}

main();