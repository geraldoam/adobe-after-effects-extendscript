# Script
$exe_script = 'C:\Program Files\Adobe\Adobe After Effects 2020\Support Files\AfterFX.com'
$path_to_jsx_script = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\script.jsx'
$invoke_script = & "$exe_script" -noui -r $path_to_jsx_script
$job_script = Start-Job { $invoke_script }
Wait-Job $job_script
Receive-Job $job_script

# Render
$exe_render = 'C:\Program Files\Adobe\Adobe After Effects 2020\Support Files\aerender.exe'
$path_to_aep_project = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\projects\final_project.aep'
$comp_name = 'Composition'
$output_path = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\output\final_project.avi'
$invoke_render = & "$exe_render" -project $path_to_aep_project -comp $comp_name -output $output_path

$job_render = Start-Job { $invoke_render }
Wait-Job $job_render
Receive-Job $job_render


# Converter
$exe_python = 'C:\Python38\python.exe'
$path_to_python_script = 'C:\Users\geral\Desktop\Freela\After\ae-extendscript\workspace\converter.py'
$invoke_converter = & "$exe_python" $path_to_python_script

$job_converter = Start-Job { $invoke_converter }
Wait-Job $job_converter
Receive-Job $job_converter