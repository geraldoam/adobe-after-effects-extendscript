/* Import 20 frames of the sequence, starting at frame 10 and ending at frame 30 */

var mySequence = "C:/Users/geral/Desktop/VideoProject/videos/video_01.mp4"

var importOptions = new ImportOptions();
importOptions.file = new File(mySequence);
importOptions.sequence = true;
importOptions.forceAlphabetical = false;
importOptions.rangeStart = 10;
importOptions.rangeEnd = 30;

var item = app.project.importFile(importOptions);
