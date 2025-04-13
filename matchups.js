const detailedMatchups = {
    absol: {
        hard: ["blastoise", "buzzwole", "clefable", "crustle", "mamoswine", "slowbro", "snorlax", "trevenant", "umbreon", "zacian"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "charizard", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "hoopa", "inteleon", "mew", "miraidon", "pikachu", "psyduck", "sableye", "sylveon"]
    },
    aegislash: {
        hard: ["clefable", "mr-mime", "umbreon"],
        easy: ["alolan-ninetales", "azumarill", "blissey", "chandelure", "comfey", "cramorant", "decidueye", "delphox", "dragonite", "duraludon", "eldegoss", "gardevoir", "hoopa", "inteleon", "pikachu", "sableye", "sylveon"]
    },
    alcremie:{
        hard: [],
        easy: []
    },
    "alolan-ninetales": {
        hard: ["aegislash", "darkrai", "gengar", "greninja", "mew", "talonflame"],
        easy: ["azumarill", "blaziken", "blissey", "buzzwole", "ceruledge", "charizard", "clefable", "comfey", "dodrio", "dragonite", "eldegoss", "falinks", "garchomp", "goodra", "gyarados", "ho-oh", "hoopa", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "meowscarada", "metagross", "mr-mime", "psyduck", "sableye", "scizor", "slowbro", "tinkaton", "umbreon", "urshifu", "wigglytuff", "zacian", "zeraora"]
    },
    "alolan-raichu":{
        hard: [],
        easy: []
    },
    armarouge: {
        hard: ["absol", "ceruledge", "darkrai", "dodrio", "galarian-rapidash", "gengar", "leafeon", "lucario", "machamp", "meowscarada", "mimikyu", "scizor", "talonflame", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "clefable", "comfey", "eldegoss", "hoopa", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    azumarill: {
        hard: ["absol", "aegislash", "alolan-ninetales", "blaziken", "buzzwole", "charizard", "darkrai", "dodrio", "dragapult", "espeon", "galarian-rapidash", "gengar", "leafeon", "lucario", "mamoswine", "mewtwo-y", "meowscarada", "talonflame", "trevenant", "zacian", "zeraora", "zoroark"],
        easy: ["comfey", "decidueye", "duraludon", "eldegoss", "glaceon", "hoopa", "sableye"]
    },
    blastoise: {
        hard: ["cinderace", "mewtwo-y"],
        easy: ["absol", "ceruledge", "chandelure", "charizard", "comfey", "cramorant", "darkrai", "decidueye", "delphox", "dodrio", "duraludon", "eldegoss", "espeon", "falinks", "gardevoir", "gengar", "gyarados", "hoopa", "meowscarada", "mimikyu", "mr-mime", "pikachu", "sableye", "suicune", "talonflame", "wigglytuff", "zeraora"]
    },
    blaziken: {
        hard: ["alolan-ninetales", "clefable", "mewtwo-y", "mr-mime", "slowbro", "snorlax", "umbreon", "wigglytuff"],
        easy: ["azumarill", "blissey", "cinderace", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "eldegoss", "garchomp", "gardevoir", "hoopa", "mew", "pikachu", "psyduck", "sableye", "sylveon"]
    },
    blissey: {
        hard: ["absol", "aegislash", "alolan-ninetales", "armarouge", "blaziken", "ceruledge", "cinderace", "darkrai", "delphox", "dodrio", "dragapult", "espeon", "falinks", "galarian-rapidash", "glaceon", "greninja", "gyarados", "inteleon", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "miraidon", "suicune", "sylveon", "talonflame", "tinkaton", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: ["buzzwole", "garchomp", "gengar"]
    },
    buzzwole: {
        hard: ["alolan-ninetales", "blissey", "cinderace", "delphox", "glaceon", "mamoswine", "mewtwo-y", "mr-mime", "snorlax", "trevenant", "wigglytuff"],
        easy: ["absol", "azumarill", "clefable", "comfey", "cramorant", "decidueye", "dodrio", "dragonite", "duraludon", "eldegoss", "falinks", "garchomp", "gardevoir", "gengar", "goodra", "gyarados", "hoopa", "lapras", "meowscarada", "metagross", "psyduck", "sableye", "slowbro", "talonflame", "tsareena", "venusaur", "zeraora"]
    },
    ceruledge: {
        hard: ["alolan-ninetales", "blastoise", "clefable", "mamoswine", "mr-mime", "slowbro", "snorlax", "trevenant", "umbreon"],
        easy: ["armarouge", "blissey", "chandelure", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "gardevoir", "hoopa", "inteleon", "psyduck", "sableye"]
    },
    chandelure: {
        hard: ["absol", "aegislash", "blastoise", "ceruledge", "darkrai", "dodrio", "dragapult", "dragonite", "falinks", "galarian-rapidash", "gengar", "greedent", "greninja", "gyarados", "ho-oh", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "mimikyu", "scizor", "talonflame", "tsareena", "tyranitar", "umbreon", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["comfey", "eldegoss", "garchomp", "hoopa", "mr-mime"]
    },
    charizard: {
        hard: ["absol", "alolan-ninetales", "blastoise", "cinderace", "crustle", "espeon", "greninja", "leafeon", "lucario", "mewtwo-y", "mew", "mr-mime", "slowbro", "talonflame", "urshifu", "zacian", "zoroark"],
        easy: ["azumarill", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "gardevoir", "hoopa", "pikachu", "sableye", "venusaur"]
    },
    cinderace: {
        hard: ["blaziken", "darkrai", "gengar", "lucario", "mewtwo-x", "zoroark"],
        easy: ["blastoise", "blissey", "buzzwole", "charizard", "clefable", "comfey", "cramorant", "delphox", "duraludon", "eldegoss", "garchomp", "gardevoir", "goodra", "hoopa", "lapras", "mamoswine", "mr-mime", "psyduck", "sableye", "slowbro", "snorlax", "trevenant", "wigglytuff"]
    },
    clefable: {
        hard: ["alolan-ninetales", "armarouge", "buzzwole", "cinderace", "darkrai", "delphox", "dragapult", "espeon", "falinks", "galarian-rapidash", "garchomp", "gengar", "glaceon", "gyarados", "ho-oh", "inteleon", "leafeon", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "mew", "mimikyu", "miraidon", "pikachu", "suicune", "sylveon", "tinkaton", "tyranitar", "umbreon", "venusaur", "zacian"],
        easy: ["absol", "aegislash", "blaziken", "ceruledge", "dodrio", "greninja", "lucario", "scizor", "talonflame", "tsareena", "zeraora", "zoroark"]
    },
    comfey: {
        hard: ["absol", "aegislash", "alolan-ninetales", "armarouge", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "chandelure", "charizard", "cinderace", "cramorant", "darkrai", "decidueye", "delphox", "dodrio", "dragapult", "dragonite", "duraludon", "espeon", "falinks", "galarian-rapidash", "garchomp", "gardevoir", "gengar", "glaceon", "greninja", "gyarados", "ho-oh", "inteleon", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "miraidon", "pikachu", "scizor", "suicune", "sylveon", "talonflame", "tinkaton", "trevenant", "tsareena", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: [] // Empty array as no "Good Matchups" were listed
    },
    cramorant: {
        hard: ["absol", "aegislash", "blastoise", "blaziken", "buzzwole", "ceruledge", "charizard", "cinderace", "crustle", "darkrai", "delphox", "dodrio", "dragapult", "dragonite", "falinks", "galarian-rapidash", "gengar", "glaceon", "goodra", "greninja", "gyarados", "ho-oh", "inteleon", "lapras", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "miraidon", "psyduck", "scizor", "slowbro", "snorlax", "suicune", "talonflame", "tinkaton", "trevenant", "tsareena", "tyranitar", "umbreon", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["comfey", "eldegoss", "hoopa", "sableye"] 
    },
    crustle: {
        hard: ["garchomp", "venusaur"],
        easy: ["absol", "charizard", "cramorant", "darkrai", "decidueye", "delphox", "dodrio", "duraludon", "eldegoss", "galarian-rapidash", "gardevoir", "gyarados", "hoopa", "lucario", "machamp", "meowscarada", "sableye", "wigglytuff"]
    },
    darkrai: {
        hard: ["blastoise", "crustle", "mamoswine", "slowbro", "snorlax", "trevenant", "umbreon"],
        easy: ["alolan-ninetales", "armarouge", "azumarill", "blissey", "chandelure", "cinderace", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "greninja", "hoopa", "inteleon", "mewtwo-y", "mew", "miraidon", "mr-mime", "pikachu", "psyduck", "sableye", "suicune", "sylveon", "venusaur", "wigglytuff"]
    },
    decidueye: {
        hard: ["absol", "aegislash", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "charizard", "crustle", "darkrai", "dodrio", "dragapult", "dragonite", "falinks", "galarian-rapidash", "gengar", "glaceon", "goodra", "greedent", "greninja", "gyarados", "ho-oh", "lapras", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mimikyu", "psyduck", "sableye", "scizor", "suicune", "talonflame", "tinkaton", "tsareena", "tyranitar", "umbreon", "urshifu", "wigglytuff", "zacian", "zeraora", "zoroark"],
        easy: ["duraludon", "eldegoss", "hoopa", "mamoswine", "mr-mime", "snorlax"]
    },
    delphox: {
        hard: ["absol", "aegislash", "blastoise", "blaziken", "ceruledge", "charizard", "cinderace", "crustle", "darkrai", "dodrio", "dragapult", "dragonite", "falinks", "galarian-rapidash", "gengar", "greedent", "greninja", "gyarados", "ho-oh", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mimikyu", "talonflame", "tsareena", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "buzzwole", "clefable", "comfey", "cramorant", "duraludon", "eldegoss", "garchomp", "hoopa", "mr-mime", "psyduck", "sableye", "slowbro", "snorlax", "wigglytuff"]
    },
    dodrio: {
        hard: ["alolan-ninetales", "blastoise", "buzzwole", "clefable", "crustle", "mamoswine", "mewtwo-x", "pikachu", "slowbro", "umbreon", "wigglytuff"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "comfey", "cramorant", "decidueye", "delphox", "dragonite", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "hoopa", "inteleon", "mew", "miraidon", "psyduck", "sableye"]
    },
    dragapult: {
        hard: ["darkrai", "gengar", "leafeon", "mimikyu", "talonflame", "zacian"],
        easy: ["azumarill", "blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "greedent", "hoopa", "sableye", "snorlax", "sylveon", "trevenant"]
    },
    dragonite: {
        hard: ["aegislash", "alolan-ninetales", "buzzwole", "dodrio", "leafeon", "mamoswine", "mewtwo-y", "mr-mime", "trevenant", "umbreon", "wigglytuff", "zacian", "zoroark"],
        easy: ["chandelure", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "garchomp", "gardevoir", "hoopa", "sableye"]
    },
    duraludon: {
        hard: ["absol", "aegislash", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "charizard", "cinderace", "crustle", "darkrai", "decidueye", "delphox", "dodrio", "dragapult", "dragonite", "espeon", "falinks", "galarian-rapidash", "gengar", "glaceon", "greedent", "greninja", "gyarados", "ho-oh", "inteleon", "lapras", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "psyduck", "sableye", "scizor", "slowbro", "suicune", "talonflame", "tinkaton", "trevenant", "tsareena", "tyranitar", "umbreon", "urshifu", "venusaur", "wigglytuff", "zacian", "zeraora", "zoroark"],
        easy: ["comfey", "hoopa"]
    },
    eldegoss: {
        hard: ["absol", "aegislash", "alolan-ninetales", "armarouge", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "chandelure", "cinderace", "cramorant", "crustle", "darkrai", "decidueye", "delphox", "dodrio", "dragapult", "dragonite", "espeon", "falinks", "galarian-rapidash", "garchomp", "gardevoir", "gengar", "glaceon", "greninja", "gyarados", "ho-oh", "inteleon", "lapras", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "miraidon", "pikachu", "suicune", "sylveon", "talonflame", "tinkaton", "trevenant", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: [] // Empty array as no "Good Matchups" were listed
    },
    espeon: {
        hard: ["absol", "blastoise", "darkrai", "dodrio", "dragapult", "galarian-rapidash", "gengar", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "talonflame", "tyranitar", "urshifu", "zeraora", "zoroark"],
        easy: ["azumarill", "blissey", "charizard", "clefable", "comfey", "duraludon", "eldegoss", "garchomp", "greninja", "hoopa", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    falinks: {
        hard: ["alolan-ninetales", "blastoise", "buzzwole", "mamoswine", "slowbro", "snorlax", "trevenant", "umbreon"],
        easy: ["blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "garchomp", "gardevoir", "hoopa", "inteleon", "sableye"]
    },
    "galarian-rapidash": {
        hard: ["crustle", "mr-mime", "slowbro", "snorlax", "umbreon"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "hoopa", "inteleon", "mew", "miraidon", "pikachu", "psyduck", "sableye", "suicune", "sylveon", "wigglytuff"]
    },
    garchomp: {
        hard: ["absol", "alolan-ninetales", "blaziken", "blissey", "buzzwole", "chandelure", "cinderace", "darkrai", "delphox", "dodrio", "dragapult", "dragonite", "duraludon", "espeon", "falinks", "galarian-rapidash", "gardevoir", "gengar", "glaceon", "greninja", "inteleon", "leafeon", "lucario", "mamoswine", "mewtwo-y", "meowscarada", "mew", "mimikyu", "miraidon", "mr-mime", "psyduck", "slowbro", "sylveon", "talonflame", "urshifu", "wigglytuff", "zacian", "zeraora", "zoroark"],
        easy: ["clefable", "comfey", "crustle", "eldegoss", "goodra", "hoopa", "lapras"]
    },
    gardevoir: {
        hard: ["absol", "aegislash", "blastoise", "blaziken", "buzzwole", "ceruledge", "charizard", "cinderace", "crustle", "darkrai", "dodrio", "dragapult", "dragonite", "falinks", "galarian-rapidash", "gengar", "greninja", "gyarados", "ho-oh", "leafeon", "lucario", "machamp", "mewtwo-x", "meowscarada", "metagross", "mimikyu", "sableye", "scizor", "talonflame", "tinkaton", "tsareena", "tyranitar", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["eldegoss", "garchomp", "hoopa", "mr-mime"]
    },
    gengar: {
        hard: ["blastoise", "blissey", "buzzwole", "mimikyu", "slowbro", "urshifu", "wigglytuff"],
        easy: ["alolan-ninetales", "armarouge", "azumarill", "chandelure", "cinderace", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "greninja", "hoopa", "inteleon", "mewtwo-y", "miraidon", "pikachu", "psyduck", "sableye", "suicune", "sylveon", "venusaur"]
    },
    glaceon: {
        hard: ["absol", "azumarill", "darkrai", "galarian-rapidash", "gengar", "greninja", "gyarados", "lucario", "mewtwo-x", "meowscarada", "mimikyu", "talonflame", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "buzzwole", "clefable", "comfey", "cramorant", "decidueye", "dragonite", "duraludon", "eldegoss", "garchomp", "goodra", "hoopa", "lapras", "metagross", "mr-mime", "psyduck", "sableye", "snorlax", "trevenant", "wigglytuff"]
    },
    goodra: {
        hard: ["alolan-ninetales", "buzzwole", "cinderace", "garchomp", "glaceon", "inteleon", "mamoswine", "mewtwo-y", "trevenant"],
        easy: ["cramorant", "decidueye", "hoopa"]
    },
    greedent: {
        hard: ["dragapult", "glaceon", "mewtwo-y", "mr-mime", "umbreon", "venusaur"],
        easy: ["chandelure", "comfey", "decidueye", "delphox", "duraludon", "hoopa", "sableye"]
    },
    greninja: {
        hard: ["clefable", "darkrai", "espeon", "gengar", "meowscarada", "metagross", "zeraora"],
        easy: ["alolan-ninetales", "chandelure", "charizard", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "garchomp", "gardevoir", "glaceon", "hoopa", "mr-mime", "sableye"]
    },
    gyarados: {
        hard: ["alolan-ninetales", "blastoise", "buzzwole", "crustle", "mamoswine", "mr-mime", "slowbro", "snorlax", "trevenant", "umbreon", "wigglytuff", "zacian"],
        easy: ["blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "gardevoir", "glaceon", "hoopa", "pikachu", "psyduck", "sableye"]
    },
    "ho-oh": {
        hard: ["alolan-ninetales", "mr-mime", "trevenant"],
        easy: ["chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "gardevoir", "hoopa", "inteleon", "pikachu", "sableye"]
    },
    hoopa: {
        hard: ["absol", "aegislash", "alolan-ninetales", "armarouge", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "chandelure", "charizard", "cinderace", "cramorant", "crustle", "darkrai", "decidueye", "delphox", "dodrio", "dragapult", "dragonite", "duraludon", "espeon", "falinks", "galarian-rapidash", "garchomp", "gardevoir", "gengar", "glaceon", "goodra", "greedent", "greninja", "gyarados", "ho-oh", "inteleon", "lapras", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mew", "mimikyu", "miraidon", "pikachu", "snorlax", "suicune", "sylveon", "talonflame", "tinkaton", "trevenant", "tsareena", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: [] // Empty array as no "Good Matchups" were listed
    },
    inteleon: {
        hard: ["absol", "ceruledge", "darkrai", "dodrio", "falinks", "galarian-rapidash", "gengar", "ho-oh", "leafeon", "lucario", "machamp", "mewtwo-x", "meowscarada", "talonflame", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "clefable", "comfey", "cramorant", "delphox", "duraludon", "eldegoss", "garchomp", "goodra", "hoopa", "mamoswine", "mr-mime", "psyduck", "sableye", "slowbro", "snorlax", "trevenant", "umbreon", "wigglytuff"]
    },
    lapras: {
        hard: ["buzzwole", "garchomp", "glaceon", "mamoswine", "mewtwo-y", "trevenant"],
        easy: ["cramorant", "decidueye", "duraludon", "eldegoss", "hoopa"]
    },
    leafeon: {
        hard: ["alolan-ninetales", "mewtwo-x", "slowbro"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "charizard", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "dragonite", "duraludon", "eldegoss", "garchomp", "gardevoir", "hoopa", "inteleon", "mewtwo-y", "mew", "miraidon", "pikachu", "psyduck", "sableye", "venusaur"]
    },
    lucario: {
        hard: ["alolan-ninetales", "clefable", "crustle", "mewtwo-y", "mr-mime", "slowbro", "snorlax", "umbreon", "wigglytuff"],
        easy: ["armarouge", "blissey", "chandelure", "charizard", "cinderace", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "hoopa", "inteleon", "mew", "pikachu", "psyduck", "sableye", "sylveon"]
    },
    machamp: {
        hard: ["alolan-ninetales", "crustle", "mamoswine", "slowbro", "snorlax", "trevenant"],
        easy: ["armarouge", "blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "gardevoir", "hoopa", "inteleon", "pikachu", "psyduck", "sableye", "suicune", "talonflame", "wigglytuff", "zeraora"]
    },
    mamoswine: {
        hard: ["alolan-ninetales", "cinderace", "decidueye", "gardevoir", "inteleon", "leafeon", "mewtwo-y", "mr-mime"],
        easy: ["azumarill", "buzzwole", "ceruledge", "comfey", "cramorant", "darkrai", "dodrio", "dragonite", "duraludon", "eldegoss", "falinks", "garchomp", "goodra", "gyarados", "hoopa", "lapras", "mewtwo", "meowscarada", "metagross", "mimikyu", "sableye", "scizor", "sylveon", "tinkaton", "tsareena", "tyranitar", "umbreon", "zacian"]
    },
    "mewtwo-x": {
        hard: ["alolan-ninetales", "mamoswine", "mr-mime", "slowbro", "snorlax", "wigglytuff"],
        easy: ["blissey", "chandelure", "cinderace", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dodrio", "duraludon", "eldegoss", "espeon", "gardevoir", "glaceon", "hoopa", "inteleon", "leafeon", "mew", "pikachu", "psyduck", "sableye", "venusaur", "zeraora"]
    },
    "mewtwo-y": { 
        hard: ["darkrai", "gengar", "leafeon", "meowscarada", "talonflame", "zoroark"],
        easy: ["azumarill", "blastoise", "blaziken", "blissey", "buzzwole", "chandelure", "charizard", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragonite", "duraludon", "eldegoss", "garchomp", "goodra", "greedent", "hoopa", "lapras", "lucario", "mamoswine", "metagross", "mr-mime", "pikachu", "psyduck", "sableye", "slowbro", "snorlax", "trevenant", "tsareena", "venusaur", "wigglytuff"]
    },
    meowscarada: {
        hard: ["alolan-ninetales", "blastoise", "buzzwole", "crustle", "mamoswine", "slowbro", "snorlax", "trevenant", "umbreon"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "garchomp", "gardevoir", "glaceon", "greninja", "hoopa", "inteleon", "mewtwo-y", "mew", "miraidon", "pikachu", "psyduck", "sableye", "sylveon"]
    },
    metagross: {
        hard: ["alolan-ninetales", "buzzwole", "glaceon", "mamoswine", "mewtwo-y", "slowbro", "snorlax", "tinkaton", "trevenant", "umbreon"],
        easy: ["blissey", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "gardevoir", "greninja", "hoopa", "pikachu", "sylveon"]
    },
    mew: {
        hard: ["absol", "blaziken", "darkrai", "dodrio", "galarian-rapidash", "gengar", "leafeon", "lucario", "mewtwo-x", "meowscarada", "talonflame", "tyranitar", "zacian", "zeraora", "zoroark"],
        easy: ["alolan-ninetales", "blissey", "charizard", "clefable", "comfey", "cramorant", "duraludon", "eldegoss", "garchomp", "hoopa", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    mimikyu: {
        hard: ["blastoise", "buzzwole", "mamoswine", "slowbro", "snorlax", "trevenant", "umbreon"],
        easy: ["armarouge", "blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "eldegoss", "garchomp", "gardevoir", "gengar", "glaceon", "hoopa", "pikachu", "sableye", "sylveon", "zeraora"]
    },
    miraidon: {
        hard: ["absol", "darkrai", "dodrio", "galarian-rapidash", "gengar", "leafeon", "meowscarada", "slowbro", "talonflame", "umbreon", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "clefable", "comfey", "cramorant", "eldegoss", "garchomp", "hoopa", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    "mr-mime": {
        hard: ["alolan-ninetales", "armarouge", "blastoise", "chandelure", "cinderace", "darkrai", "decidueye", "delphox", "espeon", "gardevoir", "glaceon", "greninja", "inteleon", "mewtwo-y", "mew", "miraidon", "pikachu", "suicune", "talonflame", "tinkaton"],
        easy: ["aegislash", "blaziken", "buzzwole", "ceruledge", "charizard", "clefable", "dragonite", "galarian-rapidash", "garchomp", "greedent", "gyarados", "ho-oh", "lucario", "mamoswine", "mewtwo-x", "scizor", "tsareena", "tyranitar", "urshifu"]
    },
    pikachu: {
        hard: ["absol", "aegislash", "blastoise", "blaziken", "charizard", "darkrai", "galarian-rapidash", "gengar", "gyarados", "ho-oh", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "metagross", "mimikyu", "talonflame", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["clefable", "comfey", "dodrio", "eldegoss", "hoopa", "mr-mime", "sableye"]
    },
    psyduck: {
        hard: ["absol", "alolan-ninetales", "armarouge", "blaziken", "buzzwole", "ceruledge", "cinderace", "darkrai", "delphox", "dodrio", "espeon", "galarian-rapidash", "gengar", "glaceon", "gyarados", "inteleon", "leafeon", "lucario", "machamp", "mewtwo-x", "mewtwo-y", "meowscarada", "mew", "miraidon", "suicune", "talonflame", "tinkaton", "tyranitar", "zacian", "zeraora", "zoroark"],
        easy: ["cramorant", "decidueye", "duraludon", "garchomp"]
    },
    sableye: {
        hard: ["absol", "aegislash", "alolan-ninetales", "armarouge", "azumarill", "blastoise", "blaziken", "buzzwole", "ceruledge", "charizard", "cinderace", "cramorant", "crustle", "darkrai", "delphox", "dodrio", "dragapult", "dragonite", "espeon", "falinks", "galarian-rapidash", "gengar", "glaceon", "greedent", "greninja", "gyarados", "ho-oh", "inteleon", "leafeon", "lucario", "machamp", "mamoswine", "mewtwo-x", "mewtwo-y", "meowscarada", "mew", "mimikyu", "miraidon", "pikachu", "scizor", "snorlax", "suicune", "sylveon", "talonflame", "tinkaton", "trevenant", "tsareena", "tyranitar", "umbreon", "urshifu", "venusaur", "zacian", "zeraora", "zoroark"],
        easy: ["chandelure", "decidueye", "duraludon", "gardevoir"]
    },
    scizor: {
        hard: ["alolan-ninetales", "clefable", "mamoswine", "mr-mime", "snorlax", "trevenant", "wigglytuff"],
        easy: ["armarouge", "chandelure", "comfey", "cramorant", "decidueye", "duraludon", "gardevoir", "sableye"]
    },
    slowbro: {
        hard: ["alolan-ninetales", "cinderace", "delphox", "inteleon", "mewtwo-y"],
        easy: ["absol", "blaziken", "ceruledge", "charizard", "cramorant", "darkrai", "dodrio", "duraludon", "falinks", "galarian-rapidash", "garchomp", "gengar", "gyarados", "leafeon", "lucario", "machamp", "mewtwo-x", "meowscarada", "metagross", "mimikyu", "miraidon", "suicune", "sylveon", "talonflame", "tinkaton", "tyranitar", "urshifu", "zacian", "zeraora", "zoroark"]
    },
    snorlax: {
        hard: ["cinderace", "decidueye", "delphox", "dragapult", "duraludon", "glaceon", "inteleon", "mewtwo-y", "sylveon", "venusaur"],
        easy: ["absol", "blaziken", "buzzwole", "ceruledge", "cramorant", "darkrai", "falinks", "galarian-rapidash", "gyarados", "hoopa", "lucario", "machamp", "mewtwo-x", "meowscarada", "metagross", "mimikyu", "sableye", "scizor", "tsareena", "tyranitar", "urshifu", "zacian", "zeraora"]
    },
    suicune: {
        hard: ["blastoise", "darkrai", "galarian-rapidash", "gengar", "machamp", "slowbro", "talonflame"],
        easy: ["blissey", "clefable", "comfey", "cramorant", "decidueye", "duraludon", "eldegoss", "hoopa", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    sylveon: {
        hard: ["absol", "aegislash", "blaziken", "darkrai", "dodrio", "dragapult", "galarian-rapidash", "gengar", "leafeon", "lucario", "mamoswine", "mewtwo-y", "meowscarada", "metagross", "mimikyu", "slowbro", "talonflame", "tyranitar", "urshifu", "zacian", "zeraora", "zoroark"],
        easy: ["blissey", "clefable", "comfey", "eldegoss", "hoopa", "sableye"]
    },
    talonflame: {
        hard: ["blastoise", "buzzwole", "clefable", "machamp", "slowbro", "trevenant", "urshifu"],
        easy: ["alolan-ninetales", "armarouge", "azumarill", "blissey", "chandelure", "charizard", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "duraludon", "espeon", "garchomp", "gardevoir", "glaceon", "hoopa", "inteleon", "mewtwo-y", "mew", "miraidon", "mr-mime", "pikachu", "psyduck", "sableye", "suicune", "sylveon", "venusaur"]
    },
    tinkaton: {
        hard: ["alolan-ninetales", "mamoswine", "slowbro", "trevenant"],
        easy: ["blissey", "clefable", "comfey", "cramorant", "decidueye", "duraludon", "eldegoss", "gardevoir", "hoopa", "metagross", "mr-mime", "psyduck", "sableye", "wigglytuff"]
    },
    trevenant: {
        hard: ["cinderace", "dragapult", "glaceon", "inteleon", "mewtwo-y"],
        easy: ["absol", "azumarill", "buzzwole", "ceruledge", "comfey", "cramorant", "darkrai", "dragonite", "duraludon", "eldegoss", "falinks", "goodra", "gyarados", "ho-oh", "hoopa", "lapras", "machamp", "meowscarada", "metagross", "mimikyu", "sableye", "scizor", "talonflame", "tinkaton", "tsareena", "tyranitar", "zeraora"]
    },
    tsareena: {
        hard: ["buzzwole", "clefable", "mamoswine", "mewtwo-y", "mr-mime", "snorlax", "trevenant", "wigglytuff", "zacian"],
        easy: ["chandelure", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "gardevoir", "hoopa", "sableye"]
    },
    tyranitar: {
        hard: ["mamoswine", "mr-mime", "slowbro", "snorlax", "trevenant"],
        easy: ["blissey", "chandelure", "clefable", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "gardevoir", "hoopa", "mew", "psyduck", "sableye", "sylveon", "wigglytuff"]
    },
    umbreon: {
        hard: ["alolan-ninetales", "inteleon", "mamoswine"],
        easy: ["absol", "aegislash", "blaziken", "blissey", "ceruledge", "chandelure", "clefable", "comfey", "cramorant", "crustle", "darkrai", "decidueye", "delphox", "dodrio", "dragonite", "duraludon", "eldegoss", "falinks", "galarian-rapidash", "greedent", "gyarados", "hoopa", "lucario", "meowscarada", "metagross", "mimikyu", "miraidon", "sableye", "wigglytuff", "zeraora", "zoroark"]
    },
    urshifu: {
        hard: ["alolan-ninetales", "mr-mime", "slowbro", "snorlax"],
        easy: ["armarouge", "blissey", "chandelure", "charizard", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "gengar", "glaceon", "hoopa", "pikachu", "sableye", "sylveon", "talonflame", "zeraora"]
    },
    venusaur: {
        hard: ["buzzwole", "charizard", "darkrai", "gengar", "leafeon", "mewtwo-x", "mewtwo-y", "talonflame", "zacian", "zoroark"],
        easy: ["blissey", "clefable", "comfey", "delphox", "duraludon", "eldegoss", "greedent", "hoopa", "sableye", "slowbro", "snorlax"]
    },
    wigglytuff: {
        hard: ["alolan-ninetales", "armarouge", "blastoise", "cinderace", "crustle", "darkrai", "delphox", "espeon", "galarian-rapidash", "glaceon", "inteleon", "machamp", "mew", "miraidon", "suicune", "tinkaton", "tyranitar", "umbreon"],
        easy: ["blaziken", "buzzwole", "cramorant", "decidueye", "dodrio", "dragonite", "duraludon", "garchomp", "gengar", "gyarados", "lucario", "mewtwo-x", "scizor", "tsareena", "zacian", "zeraora", "zoroark"]
    },
    zacian: {
        hard: ["alolan-ninetales", "mamoswine", "slowbro", "snorlax", "wigglytuff"],
        easy: ["absol", "armarouge", "azumarill", "blissey", "chandelure", "charizard", "clefable", "comfey", "cramorant", "decidueye", "delphox", "dragapult", "dragonite", "duraludon", "eldegoss", "garchomp", "gardevoir", "glaceon", "gyarados", "hoopa", "inteleon", "mew", "miraidon", "pikachu", "psyduck", "sableye", "sylveon", "tsareena", "venusaur", "zeraora"]
    },
    zeraora: {
        hard: ["alolan-ninetales", "blastoise", "buzzwole", "clefable", "machamp", "mewtwo-x", "mimikyu", "slowbro", "snorlax", "trevenant", "umbreon", "urshifu", "wigglytuff", "zacian"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "comfey", "cramorant", "decidueye", "delphox", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "greninja", "hoopa", "inteleon", "mew", "miraidon", "pikachu", "psyduck", "sableye", "sylveon"]
    },
    zoroark: {
        hard: ["clefable", "mr-mime", "slowbro", "umbreon", "wigglytuff"],
        easy: ["armarouge", "azumarill", "blissey", "chandelure", "charizard", "cinderace", "comfey", "cramorant", "decidueye", "delphox", "dragonite", "duraludon", "eldegoss", "espeon", "garchomp", "gardevoir", "glaceon", "hoopa", "inteleon", "mewtwo-y", "mew", "miraidon", "pikachu", "psyduck", "sableye", "sylveon", "venusaur"]
    }
};