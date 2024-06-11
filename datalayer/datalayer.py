import json
import os

from pyzotero import zotero

ZOTERO_API_KEY = os.environ["ZOTERO_API_KEY"]


def sync():
    # https://www.zotero.org/groups/4998453/humanitarian_energy_co-design_toolbox/library
    zot = zotero.Zotero("4998453", "group", ZOTERO_API_KEY)
    items = zot.items()

    output_file = "../public/zotero_data.json"

    with open(output_file, "w") as file:
        json.dump(items, file, indent=2)

    print(f"Data has been written to {output_file}")


if __name__ == "__main__":
    sync()
