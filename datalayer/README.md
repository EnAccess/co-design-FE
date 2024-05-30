# Datalayer

This directory contains a small Python script to sync the Zotero Library of the [Co-Design toolkit](https://www.zotero.org/groups/4998453/humanitarian_energy_co-design_toolbox/library) into this repository.

## Pre-requisites

- [Poetry](https://python-poetry.org/)
- [pyenv](https://github.com/pyenv/pyenv)
- [Zotero](https://www.zotero.org/) Account and [API key](https://www.zotero.org/settings/keys/new)
- (Optional) [direnv](https://direnv.net/)

## Installation

```sh
poetry install
```

Set environment variable `ZOTERO_API_KEY` to your previously configured API key.

## Running the script

```sh
poetry run python datalayer.py
```
