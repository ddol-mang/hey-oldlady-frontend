PACKAGE_MANAGER := pnpm

all: install 

install:
	$(PACKAGE_MANAGER) install

build:
	$(PACKAGE_MANAGER) run build

dev: 
	$(PACKAGE_MANAGER) run dev

start:
	$(PACKAGE_MANAGER) run start

lint:
	$(PACKAGE_MANAGER) run lint

format:
	$(PACKAGE_MANAGER) run format

.PHONY: all install build start lint format