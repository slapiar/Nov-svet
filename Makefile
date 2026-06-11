.PHONY: help install dev build test lint clean book docker-build docker-run

help: ## Zobrazí túto pomocnú správu
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Inštaluje všetky závislosti
	npm install

dev: ## Spustí vývojový server
	npm run dev

build: ## Zostaví všetky moduly
	npm run build

test: ## Spustí testy
	npm test

lint: ## Skontroluje kód
	npm run lint

clean: ## Vyčistí zostavené súbory
	npm run clean

book: ## Zostaví knižnú publikáciu (vyžaduje pandoc)
	pandoc book/kapitoly/*.md \
	  --metadata title="Nov-svet" \
	  --metadata author="Nov-svet tím" \
	  -o nov-svet-kniha.pdf || \
	  echo "Pandoc nie je nainštalovaný. Nainštalujte ho: https://pandoc.org/"

docker-build: ## Zostaví Docker image
	docker build -t nov-svet .

docker-run: ## Spustí Docker kontajner
	docker run -p 3000:3000 --env-file web/.env nov-svet

setup: install ## Nastaví vývojové prostredie
	cp web/.env.example web/.env
	@echo "✅ Prostredie nastavené. Spustite 'make dev' pre štart."
