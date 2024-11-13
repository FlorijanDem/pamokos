#! /bin/bash 
# I wrote this script just for fun ;)

echo "This is the small bash script for monitoring coding activity"
cd ..

linesOfJs=$(find . -name "*.js" -exec cat {} + | wc --lines)
linesOfHtml=$(find . -name "*.html" -exec cat {} + | wc --lines)
linesOfCss=$(find . -name "*.css" -exec cat {} + | wc --lines)


cd -
date +"%A %d %B" >> ./output/totalLinesOfCodeAreWritten.txt

echo "Lines of JavaScript code writen:" >> ./output/totalLinesOfCodeAreWritten.txt
echo $linesOfJs >> ./output/totalLinesOfCodeAreWritten.txt

echo "Lines of HTML code writen:" >> ./output/totalLinesOfCodeAreWritten.txt
echo $linesOfHtml >> ./output/totalLinesOfCodeAreWritten.txt

echo "Lines of Css code writen:" >> ./output/totalLinesOfCodeAreWritten.txt
echo $linesOfCss >> ./output/totalLinesOfCodeAreWritten.txt

echo "" >> ./output/totalLinesOfCodeAreWritten.txt

tput setaf 2; echo "Result you can see in ./output/totalLinesOfCodeAreWritten.txt"; tput sgr0
