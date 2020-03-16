NODE_UTIL=npm
NODE_MODULES=./node_modules
BUILD_FOLDER=./build
GIT_UTIL=git
DEPLOY_UTIL=firebase
TAGS= -i


all:
	make $(TAGS) start
	make $(TAGS) git
	make $(TAGS) deploy

#################
### NODE & DEPLOY PART

install:
	$(NODE_UTIL) i 

build: 
	make $(TAGS) install
	$(NODE_UTIL) run build

login:
	$(DEPLOY_UTIL) login

finit:
	make $(TAGS) login
	$(DEPLOY_UTIL) init

deploy:
	make $(TAGS) build
	make $(TAGS) login
	$(DEPLOY_UTIL) deploy

start:
	make $(TAGS) cleanode
	make $(TAGS) install
	$(NODE_UTIL) start >/dev/null 2>&1 &

test:start
	$(NODE_UTIL) test

rm:
	rm -rf $(NODE_MODULES) $(BUILD_FOLDER)
	rm *.swp

cleanode:
	killall node

clean:
	make $(TAGS) cleanode
	make $(TAGS) rm

#################
### GIT PART

gaall:
	$(GIT_UTIL) add .
# ajouter seulement les fichiers déjà trackés :
gadd:
	$(GIT_UTIL) add -u
gcom:
	$(GIT_UTIL) commit
gpull:
	$(GIT_UTIL) pull
gpush:
	$(GIT_UTIL) push
ginfo:
	$(GIT_UTIL) log
	$(GIT_UTIL) status

git:
	make $(TAGS) rm
	make $(TAGS) gpull
	make $(TAGS) gadd
	make $(TAGS) gcom
	make $(TAGS) gpush
	make $(TAGS) ginfo


#################

