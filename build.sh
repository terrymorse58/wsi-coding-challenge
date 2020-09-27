#!/usr/bin/env bash
echo "Building project to build folder."
echo "Copying css files to build:"
cp -v css/wsiprods.css build/css/wsiprods.css
#
echo " "
echo "Copying index.html to build:"
cp -v index.html build/index.html
#
echo " "
echo "Copying json to build:"
cp -v wsi-products.json build/wsi-products.json
#
echo " "
echo "Building products.js with webpack/babel:"
webpack
#
echo " "
echo "Build complete."
