.DEFAULT_GOAL := help

## GENERAL ##
OWNER 			= getmin
SERVICE_NAME 	= api-node

## DEPLOY ##
ENV 			?= dev

## RESULT_VARS ##
PROJECT_NAME	         = $(OWNER)-$(ENV)-$(SERVICE_NAME)
export CONTAINER_NAME 	 = $(PROJECT_NAME)_backend
export CONTAINER_DB_NAME = $(PROJECT_NAME)_db
export IMAGE_DEV		 = $(PROJECT_NAME):dev
export IMAGE_DIST		 = $(PROJECT_NAME):dist
export IMAGE_TEST		 = $(PROJECT_NAME):test


## Init container Commons ##
build: ## build image to dev: make build
	docker build -f container/dev/Dockerfile -t $(IMAGE_DEV) application

## Init container Commons ##
build-dist: ## build image to dev: make build
	docker build -f container/dist/Dockerfile -t $(IMAGE_DIST) application

build-test: ## build image node
	docker build -f container/test-e2e/Dockerfile -t $(IMAGE_TEST) container/test-e2e

install: ## build image to dev: make install
	make build
	make console a="yarn install"
	make git-hooks

dist: ## build image to dev: make install
	make console a="rm -rf dist"
	make console a="/application/node_modules/.bin/tsc"

console: ## ejecuta la consola de la imagen node: make a="param"
	@docker run --rm -t -v ${PWD}/application:/application $(IMAGE_DEV) ${a}

start: ## up docker containers: make up
	docker-compose -f container/docker-compose.yml up -d

start-dist: ## up docker containers: make up
	docker-compose -f container/docker-compose.dist.yml up

stop: ## stop docker containers: make stop
	docker-compose -f container/docker-compose.yml stop

ssh: ## Connect to container for ssh protocol : make ssh
	docker exec -it $(CONTAINER_NAME) sh

stats: ## Connect to container for ssh protocol : make ssh
	docker stats $(CONTAINER_NAME)

log: ## Show container logs make : make log
	#docker-compose -f container/docker-compose.yml logs -f backend
	docker logs -f $(CONTAINER_NAME)

## testing - lint
tests-e2e: ## Run the end to end Tests : make tests-e2e
	docker-compose -f container/docker-compose.test.yml run --rm test

## testing - lint
tests-e2e-dist: ## Run the end to end Tests : make tests-e2e
	docker-compose -f container/docker-compose.dist.test.yml run --rm test

test-unit: ## test unit make : make test
	make console a="npm run test"

lint-fix: ## test unit make : make test
	make -s console a="npm run lint-fix"

lint: ## inspect code : make lint-inspect
	@make -s console a="npm run lint"

git-hooks: ## test unit make : make test
	cp -p ${PWD}/application/face/git-hook.sh ${PWD}/.git/hooks/pre-commit

## Tools docker##
docker-kill: ## Execute migrate : make migrate
	docker rm -f $$(docker ps -aq)

docker-rmi-dangling: ## Execute migrate : make migrate
	docker rmi $$(docker images -qf "dangling=true")

## Target Help ##
help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
