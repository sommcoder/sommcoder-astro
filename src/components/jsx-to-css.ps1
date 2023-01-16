# loops through each subdirectory, finds every .jsx file and creates a new css file of the same name in each subdirectory. If the css file already exists then it does nothing.

# command: PowerShell -File jsx-to-css.ps1

$dir = Get-ChildItem -Recurse -Directory

Foreach ($d in $dir)
{
    $jsxFiles = Get-ChildItem -Path $d.FullName -Filter *.jsx -Recurse
    
    Foreach ($jsxFile in $jsxFiles)
    {
       $cssFileName = ($jsxFile.FullName).Replace(".jsx",".css")
        $cssFileExists = Test-Path $cssFileName
        if ($cssFileExists -eq $false)
        {
            New-Item $cssFileName -ItemType File
             Write-Output "import './$($jsxFile.FullName -replace ".jsx", ".css")';"
        }
    }
}