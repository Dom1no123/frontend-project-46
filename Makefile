gendiff:
	node gendiff.js -h
	
test: 
	node --experimental-vm-modules ./node_modules/jest/bin/jest.js
	 
run:
	node genDiff.js __fixtures__/file1.json __fixtures__/file2.json
