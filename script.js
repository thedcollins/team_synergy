let selectedPokemons = [];

const synergyScores = {

    absol: {
        gardevoir: 8.5,
        pikachu: 8.0,
        blissey: 9.0,
        "mr-mime": 8.0,
        crustle: 7.5,
        snorlax: 8.5,
        talonflame: 7.0,
        zoroark: 7.0,
        machamp: 8.0,
        tsareena: 8.0
    },
    aegislash: {
        mew: 8.5,
        venusaur: 8.5,
       "mr-mime": 9.0,
        sableye: 8.0,
        slowbro: 8.5,
        snorlax: 9.0,
        absol: 7.5,
        zoroark: 7.5,
        machamp: 8.0,
        urshifu: 8.0
    },
    "alolan-ninetales": {
       "mr-mime": 9.0,
        snorlax: 9.0,
        tsareena: 8.5,
        cinderace: 8.0,
        garchomp: 8.0,
        pikachu: 8.5,
        machamp: 8.5,
        mamoswine: 8.5
    },
    armarouge: {
        Wigglytuff: 9.0,
        slowbro: 9.0,
        comfey: 8.5,
        blissey: 8.5,
        clefable: 8.5
    },
    azumarill: {
        pikachu: 8.5,
        venusaur: 8.5,
       "mr-mime": 9.0,
        sableye: 8.0,
        snorlax: 9.0,
        trevenant: 8.5,
        absol: 7.5,
        zoroark: 7.5,
        machamp: 8.0,
        tsareena: 8.0
    },
    blastoise: {
        greninja: 8.5,
        venusaur: 8.5,
        blissey: 9.0,
       "mr-mime": 9.0,
        slowbro: 8.0,
        snorlax: 8.5,
        absol: 7.5,
        zoroark: 7.5,
        machamp: 8.0,
        tsareena: 8.0
    },
    blaziken: {
        "alolan-ninetales": 8.5,
        slowbro: 8.5,
        Wigglytuff: 9.0,
        inteleon: 8.0,
        leafeon: 8.0,
        mewtwo: 8.5,
        umbreon: 9.0,
        urshifu: 8.5,
        comfey: 8.5,
        blissey: 9.0
    },
    blissey: {
        mew: 8.5,
        venusaur: 8.5,
       "mr-mime": 9.0,
        sableye: 8.0,
        slowbro: 8.5,
        snorlax: 9.0,
        gengar: 8.0,
        zoroark: 8.0,
        machamp: 8.5,
        tsareena: 8.5
    },
    buzzwole: {
        gardevoir: 8.5,
        pikachu: 8.5,
        "mr-mime": 9.0,
        sableye: 8.0,
        slowbro: 8.5,
        snorlax: 9.0,
        gengar: 8.0,
        zoroark: 8.0,
        machamp: 8.5,
        tsareena: 8.5
    },
    ceruledge: {
        "alolan-ninetales": 8.5,
        slowbro: 9.0,
        Wigglytuff: 9.0,
        comfey: 8.5,
        blissey: 9.0,
        clefable: 8.5,
        mamoswine: 8.5
    },
    chandelure: {
        "alolan-ninetales": 8.5,
        slowbro: 9.0,
        Wigglytuff: 9.0,
        trevenant: 8.5,
        urshifu: 8.5,
        zacian: 8.0,
        comfey: 8.5,
        eldegoss: 8.5,
        "mr-mime": 9.0
    },
    charizard: {
        "alolan-ninetales": 8.5,
        pikachu: 8.0,
        blissey: 9.0,
        "mr-mime": 8.5,
        crustle: 7.5,
        snorlax: 8.0,
        absol: 7.0,
        zoroark: 7.0,
        machamp: 8.5,
        tsareena: 8.0
    },
    cinderace: {
        "alolan-ninetales": 8.5,
        pikachu: 8.0,
        blissey: 9.0,
        "mr-mime": 8.5,
        crustle: 7.5,
        snorlax: 8.0,
        absol: 7.0,
        zoroark: 7.0,
        machamp: 8.5,
        tsareena: 8.0
    },
    clefable: {
        mew: 8.5,
        venusaur: 8.0,
        "mr-mime": 9.0,
        sableye: 8.5,
        slowbro: 8.0,
        snorlax: 8.5,
        gengar: 7.5,
        zoroark: 7.5,
        machamp: 8.0,
        tsareena: 8.0
    },
    comfey: {
        greninja: 8.5,
        venusaur: 8.0,
        clefable: 9.0,
        "mr-mime": 8.5,
        mamoswine: 7.5,
        snorlax: 8.0,
        absol: 7.0,
        gengar: 7.0,
        machamp: 8.5,
        urshifu: 8.0
    },
    cramorant: {
        mew: 8.5,
        venusaur: 8.0,
        "mr-mime": 9.0,
        sableye: 8.5,
        slowbro: 8.0,
        snorlax: 8.5,
        absol: 7.0,
        zoroark: 7.0,
        machamp: 8.5,
        urshifu: 8.0
    },
    crustle: {
        gardevoir: 8.5,
        gengar: 8.0,
        urshifu: 8.5,
        dodrio: 7.5,
        sableye: 8.0,
        pikachu: 7.0,
        snorlax: 8.5,
        Wigglytuff: 7.5,
        "mr-mime": 8.0
    },
    darkrai: {
        Wigglytuff: 8.5,
        slowbro: 8.0,
        comfey: 9.0,
        blissey: 9.0,
        clefable: 8.5
    },
    decidueye: {
        "mr-mime": 9.0,
        snorlax: 8.5,
        tsareena: 8.0,
        "alolan-ninetales": 8.5,
        eldegoss: 9.0,
        gengar: 8.5,
        pikachu: 8.0,
        urshifu: 8.5
    },
    delphox: {
        zoroark: 8.5,
        cinderace: 8.0,
        urshifu: 8.5,
        pikachu: 8.0,
        snorlax: 9.0,
        Wigglytuff: 8.5,
        trevenant: 8.0,
        tsareena: 8.5,
        venusaur: 8.0
    },
    dodrio: {
        blissey: 8.5,
        eldegoss: 8.0,
        snorlax: 8.5,
        pikachu: 8.0,
        Wigglytuff: 8.5,
        crustle: 8.0,
        sableye: 8.0,
        talonflame: 8.0
    },
    dragapult: {
        gardevoir: 8.5,
        pikachu: 8.0,
        "mr-mime": 8.5,
        sableye: 8.0,
        slowbro: 8.5,
        snorlax: 8.5,
        gengar: 8.0,
        zoroark: 8.0,
        machamp: 8.0,
        urshifu: 8.0
    },
    dragonite: {
        blissey: 9.0,
        eldegoss: 8.5,
        machamp: 8.5,
        snorlax: 8.5,
        Wigglytuff: 8.0,
        gengar: 8.0,
        pikachu: 8.0,
        urshifu: 8.0
    },
    duraludon: {
        machamp: 9.0,
        snorlax: 8.5,
        "mr-mime": 8.0,
        "alolan-ninetales": 7.5,
        eldegoss: 7.5,
        mew: 7.0
    },
    eldegoss: {
        metagross: 9.0,
        urshifu: 8.5,
        mewtwo: 8.0,
        pikachu: 7.5,
        cinderace: 7.5,
        gardevoir: 7.0,
        snorlax: 6.5,
        slowbro: 6.5,
        trevenant: 6.0
    },
    espeon: {
        blissey: 9.0,
        eldegoss: 8.5,
        hoopa: 8.0,
        sylveon: 7.5,
        blastoise: 7.0,
        gengar: 6.5,
        machamp: 6.0,
        snorlax: 5.5,
        Wigglytuff: 5.0
    },
    falinks: {
        "alolan-ninetales": 9.0,
        slowbro: 8.5,
        Wigglytuff: 8.0,
        comfey: 7.5,
        blissey: 7.0,
        clefable: 6.5
    },
    "galarian-rapidash": {
        "alolan-ninetales": 9.0,
        slowbro: 8.5,
        Wigglytuff: 8.0,
        comfey: 7.5,
        blissey: 7.0,
        clefable: 6.5
    },
    garchomp: {
        mew: 9.5,
        "mr-mime": 9.0,
        "alolan-ninetales": 8.5,
        snorlax: 8.0,
        Wigglytuff: 7.5,
        eldegoss: 7.0
    },
    gardevoir: {
        mew: 9.5,
        venusaur: 9.0,
        "mr-mime": 8.5,
        sableye: 8.0,
        slowbro: 7.5,
        snorlax: 7.0
    },
    gengar: {
        machamp: 9.5,
        pikachu: 9.0,
        slowbro: 8.5,
        greninja: 8.0,
        urshifu: 7.5
    },
    glaceon: {
        machamp: 9.5,
        "mr-mime": 9.0,
        snorlax: 8.5,
        hoopa: 8.0,
        sylveon: 7.5,
        Wigglytuff: 7.0,
        absol: 6.5,
        aegislash: 6.0,
        cinderace: 5.5
    },
    goodra: {
        slowbro: 9.5,
        Wigglytuff: 9.0,
        gengar: 8.5,
        talonflame: 8.0,
        machamp: 7.5,
        urshifu: 7.0,
        comfey: 6.5,
        "mr-mime": 6.0
    },
    greedent: {
        machamp: 9.5,
        pikachu: 9.0,
        Wigglytuff: 8.5,
        eldegoss: 8.0,
        "mr-mime": 7.5
    },
    greninja: {
        "alolan-ninetales": 9.5,
        gardevoir: 9.0,
        blissey: 8.5,
        "mr-mime": 8.0,
        crustle: 7.5,
        snorlax: 7.0,
        absol: 6.5,
        zoroark: 6.0,
        machamp: 5.5,
        tsareena: 5.0
    },
    gyarados: {
        "alolan-ninetales": 9.5,
        slowbro: 9.0,
        Wigglytuff: 8.5,
        snorlax: 8.0,
        mamoswine: 7.5,
        trevenant: 7.0,
        zacian: 6.5,
        absol: 6.0,
        umbreon: 5.5,
        blissey: 5.0,
        comfey: 4.5,
        clefable: 4.0
    },
    "ho-oh": {
        venusaur: 9.5,
        slowbro: 9.0,
        ceruledge: 8.5,
        pikachu: 8.0,
        comfey: 7.5,
        blissey: 7.0
    },
    hoopa: {
        mew: 9.5,
        venusaur: 9.0,
        "mr-mime": 8.5,
        sableye: 8.0,
        slowbro: 7.5,
        snorlax: 7.0,
        gengar: 6.5,
        zoroark: 6.0,
        machamp: 5.5,
        tsareena: 5.0
    },
    inteleon: {
        crustle: 9.5,
        slowbro: 9.0,
        chandelure: 8.5,
        greninja: 8.0,
        leafeon: 7.5,
        lucario: 7.0,
        urshifu: 6.5,
        blissey: 6.0,
        eldegoss: 5.5
    },
    lapras: {
        "alolan-ninetales": 9.2,
        slowbro: 8.9,
        Wigglytuff: 8.7,
        delphox: 8.5,
        gardevoir: 8.3,
        pikachu: 8.1,
        trevenant: 8.0,
        urshifu: 7.8,
        zacian: 7.6,
        comfey: 7.5,
        eldegoss: 7.3,
        "mr-mime": 7.0
    },
    leafeon: {
        slowbro: 9.3,
        Wigglytuff: 9.0,
        delphox: 8.8,
        gardevoir: 8.6,
        machamp: 8.4,
        urshifu: 8.2,
        blissey: 8.0,
        eldegoss: 7.8
    },
    lucario: {
        "alolan-ninetales": 9.2,
        pikachu: 8.9,
        "mr-mime": 8.7,
        sableye: 8.5,
        slowbro: 8.3,
        snorlax: 8.0,
        gengar: 7.8,
        zoroark: 7.6,
        machamp: 7.5,
        tsareena: 7.3
    },
    machamp: {
        "alolan-ninetales": 9.3,
        pikachu: 9.1,
        "mr-mime": 8.8,
        sableye: 8.6,
        slowbro: 8.4,
        snorlax: 8.2,
        gengar: 8.0,
        zoroark: 7.8,
        tsareena: 7.6,
        urshifu: 7.4
    },
    mamoswine: {
        gardevoir: 9.2,
        mew: 9.0,
        blissey: 8.8,
        "mr-mime": 8.6,
        slowbro: 8.4,
        snorlax: 8.3,
        absol: 8.1,
        zoroark: 7.9,
        machamp: 7.7,
        tsareena: 7.5
    },
    mewtwo: {
        mamoswine: 9.4,
        slowbro: 9.3,
        Wigglytuff: 9.1,
        snorlax: 9.0,
        absol: 8.9,
        blissey: 8.8,
        gardevoir: 8.7,
        comfey: 8.6,
        leafeon: 8.5,
        greninja: 8.4,
        machamp: 8.3,
        urshifu: 8.2,
        inteleon: 8.2,
        umbreon: 7.9,
        eldegoss: 7.8,
        urshifu: 7.7
    },
    meowscarada: {
        "alolan-ninetales": 9.5,
        slowbro: 9.2,
        Wigglytuff: 9.1,
        pikachu: 8.9,
        leafeon: 8.7,
        zacian: 8.6,
        lapras: 8.3,
        snorlax: 8.2,
        trevenant: 8.0,
        blissey: 7.9,
        comfey: 7.8,
        clefable: 7.7
    },
    metagross: {
        "alolan-ninetales": 9.6,
        slowbro: 9.4,
        Wigglytuff: 9.2,
        pikachu: 8.8,
        gardevoir: 8.7,
        mew: 8.5,
        blissey: 8.2,
        comfey: 8.0,
        clefable: 7.9
    },
    mew: {
        gardevoir: 9.7,
        venusaur: 9.5,
        "mr-mime": 9.3,
        sableye: 9.1,
        slowbro: 8.9,
        snorlax: 8.7,
        absol: 8.6,
        zoroark: 8.4,
        machamp: 8.2,
        urshifu: 8.0
    },
    mimikyu: {
        "alolan-ninetales": 9.6,
        slowbro: 9.4,
        Wigglytuff: 9.3,
        inteleon: 9.1,
        leafeon: 8.9,
        zacian: 8.7,
        goodra: 8.5,
        lapras: 8.3,
        snorlax: 8.1,
        blissey: 7.9,
        comfey: 7.8,
        clefable: 7.6
    },
    miraidon: {
        "alolan-ninetales": 9.6,
        slowbro: 9.5,
        Wigglytuff: 9.4,
        snorlax: 9.2,
        metagross: 9.0,
        blastoise: 8.8
    },
    "mr-mime": {
        mew: 9.7,
        venusaur: 9.5,
        clefable: 9.3,
        sableye: 9.2,
        slowbro: 9.0,
        snorlax: 8.9,
        gengar: 8.7,
        zoroark: 8.5,
        tsareena: 8.3,
        urshifu: 8.2
    },
    pikachu: {
        mew: 9.8,
        venusaur: 9.6,
        "mr-mime": 9.4,
        sableye: 9.3,
        slowbro: 9.1,
        snorlax: 8.9,
        absol: 8.7,
        zoroark: 8.5,
        machamp: 8.3,
        urshifu: 8.2
    },       
    psyduck: {
        meowscarada: 9.0,
        absol: 9.0,
        cinderace: 8.5,
        dragapult: 8.5
    },
    sableye: {
        slowbro: 9.5,
        snorlax: 9.3,
        Wigglytuff: 9.0,
        decidueye: 8.8,
        gardevoir: 8.7,
        venusaur: 8.5,
        absol: 8.3,
        gengar: 8.2,
        scizor: 8.0,
        lucario: 7.8,
        tsareena: 7.5
    },            
    scizor: {
        "mr-mime": 9.0,
        snorlax: 8.5,
        tsareena: 8.0,
        pikachu: 8.0,
        slowbro: 7.5,
        Wigglytuff: 7.5,
        blissey: 9.5
    },
    slowbro: {
        "alolan-ninetales": 9.0,
        delphox: 8.5,
        blissey: 9.2,
        "mr-mime": 8.8,
        crustle: 8.0,
        snorlax: 8.3,
        absol: 7.5,
        zoroark: 7.7,
        tsareena: 8.6,
        urshifu: 8.4
    },
    snorlax: {
        cinderace: 8.5,
        scizor: 8.0,
        "mr-mime": 9.0,
        urshifu: 8.7,
        eldegoss: 8.3
    },
    suicune: {
        slowbro: 9.5,
        Wigglytuff: 9.0,
        venusaur: 8.5,
        leafeon: 8.0
    },
    sylveon: {
        pikachu: 9.0,
        slowbro: 9.0,
        Wigglytuff: 9.0,
        machamp: 8.5,
        "mr-mime": 8.5,
        snorlax: 8.5,
        blissey: 8.0
    },
    talonflame: {
        machamp: 9.5,
        snorlax: 9.0,
        Wigglytuff: 8.5,
        gardevoir: 8.0,
        "mr-mime": 8.0,
        urshifu: 7.5
    },
    tinkaton: {
        "alolan-ninetales": 9.0,
        slowbro: 8.5,
        Wigglytuff: 8.5,
        blissey: 9.0,
        snorlax: 8.0,
        lucario: 8.0
    },
    trevenant: {
        aegislash: 9.5,
        cinderace: 9.0,
        urshifu: 8.8,
        Wigglytuff: 8.5,
        venusaur: 8.3,
        blissey: 8.0,
        eldegoss: 7.8,
        comfey: 7.5
    },
    tsareena: {
        machamp: 9.0,
        "mr-mime": 8.5,
        snorlax: 8.0,
        cinderace: 7.5,
        pikachu: 7.0,
        blissey: 6.5
    },
    tyranitar: {
        azumarill: 9.5,
        pikachu: 9.0,
        Wigglytuff: 8.5,
        "mr-mime": 8.0,
        snorlax: 7.5,
        tsareena: 7.0,
        gardevoir: 6.5,
        gengar: 6.0,
        urshifu: 5.5,
        blissey: 5.0
    },
    umbreon: {
        slowbro: 9.5,
        Wigglytuff: 9.0,
        delphox: 8.5,
        gardevoir: 8.0,
        machamp: 7.5,
        urshifu: 7.0,
        blissey: 6.5,
        eldegoss: 6.0
    },
    urshifu: {
        "alolan-ninetales": 9.2,
        slowbro: 9.0,
        Wigglytuff: 8.8,
        gengar: 8.5,
        mew: 8.3,
        "mr-mime": 8.0,
        snorlax: 7.8,
        tsareena: 7.5,
        blissey: 7.0
    },
    venusaur: {
        "mr-mime": 9.0,
        snorlax: 8.5,
        tsareena: 8.0,
        "alolan-ninetales": 7.5,
        slowbro: 7.0,
        Wigglytuff: 6.5,
        blissey: 6.0
    },
    Wigglytuff: {
        absol: 9.0,
        gardevoir: 8.5,
        urshifu: 8.0,
        "mr-mime": 7.5,
        snorlax: 7.0,
        tsareena: 6.5
    },
    zacian: {
        "alolan-ninetales": 9.5,
        slowbro: 9.0,
        Wigglytuff: 8.8,
        gardevoir: 8.5,
        gengar: 8.3,
        mew: 8.0,
        trevenant: 7.8,
        tsareena: 7.5,
        urshifu: 7.0,
        blissey: 6.8
    },
    zeraora: {
        pikachu: 9.2,
        slowbro: 8.7,
        Wigglytuff: 8.5,
        "mr-mime": 8.3,
        snorlax: 8.0,
        tsareena: 7.9
    },
    zoroark: {
        pikachu: 9.0,
        snorlax: 8.8,
        Wigglytuff: 8.6,
        "mr-mime": 8.4,
        mamoswine: 8.2,
        tsareena: 8.0
    }
};

// All Pokémon data (for showing images/roles)
const allPokemonData = {
    absol: { image: "images/absol/absol.png", role: "speedster" },
    aegislash: { image: "images/aegislash/aegislash.png", role: "all-rounder" },
    "alolan-ninetales": { image: "images/alolan-ninetales/alolan-ninetales.png", role: "attacker" },
    armarouge: { image: "images/armarouge/armarouge.png", role: "attacker" },
    azumarill: { image: "images/azumarill/azumarill.png", role: "all-rounder" },
    blastoise: { image: "images/blastoise/blastoise.png", role: "defender" },
    blaziken: { image: "images/blaziken/blaziken.png", role: "all-rounder" },
    blissey: { image: "images/blissey/blissey.png", role: "supporter" },
    buzzwole: { image: "images/buzzwole/buzzwole.png", role: "all-rounder" },
    ceruledge: { image: "images/ceruledge/ceruledge.png", role: "all-rounder" },
    chandelure: { image: "images/chandelure/chandelure.png", role: "attacker" },
    charizard: { image: "images/charizard/charizard.png", role: "all-rounder" },
    cinderace: { image: "images/cinderace/cinderace.png", role: "attacker" },
    clefable: { image: "images/clefable/clefable.png", role: "supporter" },
    comfey: { image: "images/comfey/comfey.png", role: "supporter" },
    cramorant: { image: "images/cramorant/cramorant.png", role: "attacker" },
    crustle: { image: "images/crustle/crustle.png", role: "defender" },
    darkrai: { image: "images/darkrai/darkrai.png", role: "speedster" },
    decidueye: { image: "images/decidueye/decidueye.png", role: "attacker" },
    delphox: { image: "images/delphox/delphox.png", role: "attacker" },
    dodrio: { image: "images/dodrio/dodrio.png", role: "speedster" },
    dragapult: { image: "images/dragapult/dragapult.png", role: "attacker" },
    dragonite: { image: "images/dragonite/dragonite.png", role: "all-rounder" },
    duraludon: { image: "images/duraludon/duraludon.png", role: "attacker" },
    eldegoss: { image: "images/eldegoss/eldegoss.png", role: "supporter" },
    espeon: { image: "images/espeon/espeon.png", role: "attacker" },
    falinks: { image: "images/falinks/falinks.png", role: "all-rounder" },
    "galarian-rapidash": { image: "images/galarian-rapidash/galarian-rapidash.png", role: "speedster" },
    garchomp: { image: "images/garchomp/garchomp.png", role: "all-rounder" },
    gardevoir: { image: "images/gardevoir/gardevoir.png", role: "attacker" },
    gengar: { image: "images/gengar/gengar.png", role: "speedster" },
    glaceon: { image: "images/glaceon/glaceon.png", role: "attacker" },
    goodra: { image: "images/goodra/goodra.png", role: "defender" },
    greedent: { image: "images/greedent/greedent.png", role: "defender" },
    greninja: { image: "images/greninja/greninja.png", role: "attacker" },
    gyarados: { image: "images/gyarados/gyarados.png", role: "all-rounder" },
    "ho-oh": { image: "images/ho-oh/ho-oh.png", role: "defender" },
    hoopa: { image: "images/hoopa/hoopa.png", role: "supporter" },
    inteleon: { image: "images/inteleon/inteleon.png", role: "attacker" },
    lapras: { image: "images/lapras/lapras.png", role: "defender" },
    leafeon: { image: "images/leafeon/leafeon.png", role: "speedster" },
    lucario: { image: "images/lucario/lucario.png", role: "all-rounder" },
    machamp: { image: "images/machamp/machamp.png", role: "all-rounder" },
    mamoswine: { image: "images/mamoswine/mamoswine.png", role: "defender" },
    mewtwo: { image: "images/mewtwo/mewtwo.png", role: "all-rounder" },
    meowscarada: { image: "images/meowscarada/meowscarada.png", role: "speedster" },
    metagross: { image: "images/metagross/metagross.png", role: "all-rounder" },
    mew: { image: "images/mew/mew.png", role: "attacker" },
    mimikyu: { image: "images/mimikyu/mimikyu.png", role: "all-rounder" },
    miraidon: { image: "images/miraidon/miraidon.png", role: "attacker" },
    "mr-mime": { image: "images/mr-mime/mr-mime.png", role: "supporter" },
    pikachu: { image: "images/pikachu/pikachu.png", role: "attacker" },
    mew: { image: "images/mew/mew.png", role: "attacker" },
    psyduck: { image: "images/psyduck/psyduck.png", role: "supporter" },
    sableye: { image: "images/sableye/sableye.png", role: "supporter" },
    scizor: { image: "images/scizor/scizor.png", role: "all-rounder" },
    slowbro: { image: "images/slowbro/slowbro.png", role: "defender" },
    snorlax: { image: "images/snorlax/snorlax.png", role: "defender" },
    suicune: { image: "images/suicune/suicune.png", role: "all-rounder" },
    sylveon: { image: "images/sylveon/sylveon.png", role: "attacker" },
    talonflame: { image: "images/talonflame/talonflame.png", role: "speedster" },
    tinkaton: { image: "images/tinkaton/tinkaton.png", role: "all-rounder" },
    trevenant: { image: "images/trevenant/trevenant.png", role: "defender" },
    tsareena: { image: "images/tsareena/tsareena.png", role: "all-rounder" },
    tyranitar: { image: "images/tyranitar/tyranitar.png", role: "all-rounder" },
    umbreon: { image: "images/umbreon/umbreon.png", role: "defender" },
    urshifu: { image: "images/urshifu/urshifu.png", role: "all-rounder" },
    venusaur: { image: "images/venusaur/venusaur.png", role: "attacker" },
    Wigglytuff: { image: "images/wigglytuff/wigglytuff.png", role: "supporter" },
    zacian: { image: "images/zacian/zacian.png", role: "all-rounder" },
    zeraora: { image: "images/zeraora/zeraora.png", role: "speedster" },
    zoroark: { image: "images/zoroark/zoroark.png", role: "speedster" },
};

// Select or deselect a Pokémon
function selectPokemon(pokemonName, pokemonImage, role) {
  const existingIndex = selectedPokemons.findIndex(p => p.name === pokemonName);

  if (existingIndex !== -1) {
    selectedPokemons.splice(existingIndex, 1); // Deselect
  } else {
    if (selectedPokemons.length < 4) {
      selectedPokemons.push({ name: pokemonName, image: pokemonImage, role: role });
    } else {
      alert("You can only select 4 Pokémon.");
      return;
    }
  }

  updateSelectedDisplay();
}

// Update selected Pokémon display
function updateSelectedDisplay() {
  const selectedDisplay = document.getElementById("selected-display");
  selectedDisplay.innerHTML = "";

  if (selectedPokemons.length === 0) {
    selectedDisplay.innerHTML = "<p></p>";
  } else {
    selectedPokemons.forEach(pokemon => {
      const img = document.createElement("img");
      img.src = pokemon.image;
      img.alt = pokemon.name;
      img.classList.add("pokemon-icon", pokemon.role);
      selectedDisplay.appendChild(img);
    });
  }

  getTopSynergyMatchesForTeam();
}

// Reset selection
function resetSelection() {
  selectedPokemons = [];
  updateSelectedDisplay();
}

// Calculate top 3 synergy matches based on full team
function getTopSynergyMatchesForTeam() {
  const selectedNames = selectedPokemons.map(p => p.name);
  const synergyTotals = {};

  selectedNames.forEach(selected => {
    const scores = synergyScores[selected];
    if (!scores) return;

    for (const [partner, score] of Object.entries(scores)) {
      if (selectedNames.includes(partner)) continue;
      synergyTotals[partner] = (synergyTotals[partner] || 0) + score;
    }
  });

  const topMatches = Object.entries(synergyTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(entry => entry[0]);

  showTopSynergyMatchesForTeam(topMatches);
}

// Display top 3 synergy matches
function showTopSynergyMatchesForTeam(pokemonNames) {
  const container = document.getElementById("top-synergy-team");
  container.innerHTML = "";

  if (!pokemonNames.length) {
    container.innerHTML = "<p></p>";
    return;
  }

  const label = document.createElement("p");
  container.appendChild(label);

  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "15px";
  wrapper.style.justifyContent = "center";

  pokemonNames.forEach(name => {
    if (!allPokemonData[name]) return;

    const { image, role } = allPokemonData[name];
    const img = document.createElement("img");
    img.src = image;
    img.alt = name;
    img.classList.add("pokemon-icon", role);

    wrapper.appendChild(img);
  });

  container.appendChild(wrapper);
}