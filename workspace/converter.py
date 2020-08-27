import moviepy.editor as moviepy

clip = moviepy.VideoFileClip("output/final_project.avi")
clip.write_videofile("output/final_project.mp4")