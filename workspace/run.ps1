# Script
$exe_script = 'C:\Program Files\Adobe\Adobe After Effects 2020\Support Files\AfterFX.exe'
$path_script = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\script.jsx'

& "$exe_script" -r $path_script


# Render
$exe_render = 'C:\Program Files\Adobe\Adobe After Effects 2020\Support Files\aerender.exe'
$path_project = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\template.aep'
$comp_name = 'Composition'
$output_path = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\output\final_project.avi'

& "$exe_render" -project $path_project -comp $comp_name -output $output_path