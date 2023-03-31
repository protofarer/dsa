#!/bin/sh

# run this from ~/src !
str="$1"

case "$1" in
?*)
  echo -n Compiling $str.ts ...
  npx tsc $str.ts
  echo " done"

  echo Executing $str.js ...
  node $str.js
  rm $str.js
  ;;

*) # no str?
  echo "Error: No filename specified" 1>&2
  exit
  ;;
esac
