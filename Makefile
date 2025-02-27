image-build:
	@docker compose -f docker-compose.yml build

npm-install:
	@docker run --rm -w /code -v ./code/:/code ffxmat bash -c "npm install"

build:
	docker run -ti --rm \
		-v ./:/code \
		mat-ffx-app npm run build

test:
	docker run -ti --rm \
		-v ./:/code \
		mat-ffx-app npm run test

up:
	@docker compose -f docker-compose.yml --env-file .env.local up -d

down:
	@docker compose -f docker-compose.yml --env-file .env.local down

bash:
	docker run -ti --rm \
		-v ./:/code \
		mat-ffx-app bash

lint:
	@docker run -ti --rm \
		-v ./:/code \
		mat-ffx-app npm run lint
