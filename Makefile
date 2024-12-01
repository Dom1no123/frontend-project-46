gendiff:
	node gendiff.js -h
	
test: 
	 node --experimental-vm-modules ./node_modules/jest/bin/jest.js --coverage
