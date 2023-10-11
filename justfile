core_dir := "./src/core/"

runcore filename:
	npx tsc --outDir ./src/core/ ./src/core/{{filename}}.ts
	node ./src/core/{{filename}}.js
	rm ./src/core/{{filename}}.js

build-core filename:
	npx tsc --outDir ./src/core/ ./src/core/{{filename}}.ts

test filename:
	npx jest {{file_stem(filename)}}.test.{{extension(filename)}}

runpy:
	#!/usr/bin/env python3
	print("hello from py")