<?php
$myfile = fopen("Q3-3.txt", "w") or die("Unable to open file!");
$txt = "Hi, I am Kriti Thakrar, Roll no. A061 from batch 3 & currently pursuing MCA from MPSTME.\n";
fwrite($myfile, $txt);
fclose($myfile);
?>