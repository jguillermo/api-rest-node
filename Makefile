.DEFAULT_GOAL := help

## GENERAL ##
OWNER 			= getmin
SERVICE_NAME 	= demonode

## DEPLOY ##
ENV 			?= dev

## RESULT_VARS ##
PROJECT_NAME	         = $(OWNER)-$(ENV)-$(SERVICE_NAME)
export CONTAINER_NAME 	 = $(PROJECT_NAME)_backend
export CONTAINER_DB_NAME = $(PROJECT_NAME)_db
export IMAGE_DEV		 = $(PROJECT_NAME):dev


## Init container Commons ##
build: ## build image to dev: make build
	docker build -f container/dev/Dockerfile -t $(IMAGE_DEV) application

start: ## up docker containers: make up
	docker-compose -f container/docker-compose.yml up -d

stop: ## stop docker containers: make stop
	docker-compose -f container/docker-compose.yml stop

ssh: ## Connect to container for ssh protocol : make ssh
	docker exec -it $(CONTAINER_NAME) sh

log: ## Show container logs make : make log
	#docker-compose -f container/docker-compose.yml logs -f backend
	docker logs -f $(CONTAINER_NAME)

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
