#!/bin/sh

SEQ="$1"
NAME="$2"
FILENAME="$SEQ-$NAME"

PATH_PROB="problems"
PATH_TEST="__tests__"

case "$1" in
?*)
  cat > $PATH_PROB/$FILENAME.ts <<EOF
  export default function $NAME() {
  }
EOF
  echo Created ~/src/$PATH_PROB/$FILENAME.ts ...

  cat > "$PATH_TEST/$FILENAME.test.ts" <<EOF
  import f from "../$PATH_PROB/$FILENAME.ts";

  describe("main", () => {
    it("core", () => {

    });
  });
EOF

  echo Created ~/src/$PATH_TEST/$FILENAME.test.ts ...
  ;;

*) # no str?
  echo "Error: No filename specified" 1>&2
  exit
  ;;
esac
