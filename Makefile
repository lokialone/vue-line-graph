PROJECT_NAME=weidian-dependencies-charts

DEV_PATH=/home/souche/dev/souche-f2e/projects/dafengche/$(PROJECT_NAME)
DOCS_PATH=$(DEV_PATH)/docs
EXAMPLES_PATH=$(DEV_PATH)/examples

REMOTE_SERVER=souche@115.29.202.141

DOCS_FILES=./docs/*
EXAMPLES_FILES=./examples/dist/*

##############################
# 初始化 git 并推送到 gitlab
# ##############################
init-git:
	@git init
	@git remote add origin git@git.souche.com:fis-projects/$(PROJECT_NAME).git
	@git add .
	@git commit -m "init"
	@git push -u origin master

publish-docs:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(DOCS_PATH)'
	rsync -rvI --delete-after --progress $(DOCS_FILES) $(REMOTE_SERVER):$(DOCS_PATH)
	@echo "Please visit http://f2e.souche.com/projects/dafengche/$(PROJECT_NAME)/docs/"

publish-examples:
	@ssh $(REMOTE_SERVER) 'mkdir -p $(EXAMPLES_PATH)'
	rsync -rvI --delete-after --progress $(EXAMPLES_FILES) $(REMOTE_SERVER):$(EXAMPLES_PATH)
	@echo "Please visit http://f2e.souche.com/projects/dafengche/$(PROJECT_NAME)/examples/"

update-tpl:
	@sue update
	@git checkout docs/
	@git checkout examples/
	@git checkout index.babel.js
	@git checkout index.js

.PHONY: init-git publish-docs 
