install:
		npm ci
	
brain:
		node bin/brain-games.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .
