#!/bin/sh

SEQ="$1"
NAME="$2"
FILENAME="$SEQ-$NAME"
LOWERFIRSTCHAR_FILENAME=`sed 's/\(.\)/\L\1/' <<< "$NAME"`

PATH_PROB="problems"
PATH_TEST="__tests__"
PATH_PROBFILE="$PATH_PROB/$FILENAME.ts"
PATH_TESTFILE="$PATH_TEST/$FILENAME.test.ts"


case "$1" in
?*)
  cat > "$PATH_PROBFILE" <<EOF
  export default function $LOWERFIRSTCHAR_FILENAME() {
  }
EOF
  echo Created ~/src/$PATH_PROBFILE...

  cat > "$PATH_TESTFILE" <<EOF
  import f from "../$PATH_PROBFILE";

  describe("main", () => {
    it("core", () => {

    });
  });
EOF
  echo Created ~/src/$PATH_TESTFILE...

  code $PATH_PROBFILE
  code $PATH_TESTFILE
  ;;

*) # no str?
  echo "Error: No filename specified" 1>&2
  exit
  ;;
esac
