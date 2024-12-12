gendiff:
	node bin/gendiff.js -h
	
test: 
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js
	 
run:
	node genDiff.js src/__fixtures__/file1.json src/__fixtures__/file2.json
