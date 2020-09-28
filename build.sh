#!/usr/bin/env bash
echo "Building project to build folder."
#
echo " "
echo "Removing 'module' script call from index.html and copying to build folder:"
sed 's/ type="module">/>/' index.html > build/index.html
#
echo " "
echo "Copying json input file to build folder:"
cp -v wsi-products.json build/wsi-products.json
#
echo " "
echo "Converting with PostCSS to 'build/css/wsiprods.css':"
postcss css/wsiprods.css --output build/css/wsiprods.css --verbose
#
echo " "
echo "Building products.js with webpack/babel:"
webpack
#
echo " "
echo "Build complete."
