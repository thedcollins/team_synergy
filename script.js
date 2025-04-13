document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Element References ---
    const pokemonGridList = document.getElementById('pokemon-grid-list');
    const selectedPokemonDisplay = document.getElementById('selected-pokemon-display');
    const playWithList = document.getElementById('play-with-list');
    const easyMatchupList = document.getElementById('easy-matchup-list');
    const hardCounterList = document.getElementById('hard-counter-list');

    let currentlySelectedGridIcon = null;

    // --- FUNCTIONS ---

    /**
     * Helper to create Pokémon icon elements (same as before)
     */
    function createPokemonIcon(pokemonName, extraClasses = []) {
        const dataKey = Object.keys(allPokemonData).find(key => key.toLowerCase() === pokemonName.toLowerCase());
        const data = dataKey ? allPokemonData[dataKey] : null;
        if (!data) { console.warn(`Icon data missing for: ${pokemonName}`); return null; }

        const img = document.createElement('img');
        img.src = data.image;
        img.alt = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        img.title = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        img.classList.add('pokemon-icon', data.role, ...extraClasses);
        return img;
    }

    /**
     * Populates a specific list display area with Pokémon icons.
     * @param {HTMLElement} listElement - The container element (e.g., playWithList).
     * @param {string[]} pokemonNames - Array of Pokémon names (lowercase).
     */
    function populatePokemonList(listElement, pokemonNames) {
        if (!listElement) return;
        listElement.innerHTML = ''; // Clear previous content

        if (pokemonNames && pokemonNames.length > 0) {
            pokemonNames.forEach(name => {
                const icon = createPokemonIcon(name.toLowerCase());
                if (icon) {
                    listElement.appendChild(icon);
                } else { // Fallback text if icon fails
                    const nameText = document.createElement('span');
                    nameText.textContent = name.charAt(0).toUpperCase() + name.slice(1);
                    nameText.style.fontSize = '0.8em'; nameText.style.margin = '2px';
                    listElement.appendChild(nameText);
                }
            });
        } else {
            listElement.innerHTML = '<span>N/A</span>'; // Placeholder
        }
    }


    /**
     * Populates the Pokémon selection grid (Right Column)
     */
    function displayAllPokemonGrid() {
        pokemonGridList.innerHTML = ''; // Clear existing grid
        const pokemonNames = Object.keys(allPokemonData).map(name => name.toLowerCase());

        pokemonNames.sort().forEach(pokemonName => {
            const listItem = document.createElement('li');
            listItem.classList.add('cards__item');
            const icon = createPokemonIcon(pokemonName);
            if (icon) {
                icon.onclick = () => selectPokemon(pokemonName, icon); // Pass lowercase name
                listItem.appendChild(icon);
                pokemonGridList.appendChild(listItem);
            }
        });
    }

    /**
     * Main function to handle Pokémon selection and update the left column.
     * @param {string} pokemonName - The selected Pokémon name (lowercase).
     * @param {HTMLElement} selectedGridIconElement - The icon element clicked in the grid.
     */
    function selectPokemon(pokemonName, selectedGridIconElement) {
        console.log(`Selected: ${pokemonName}`);

        // --- Update Grid Selection Visual ---
        if (currentlySelectedGridIcon) {
            currentlySelectedGridIcon.classList.remove('selected');
        }
        selectedGridIconElement.classList.add('selected');
        currentlySelectedGridIcon = selectedGridIconElement;

        // --- Update Selected Pokémon Display (Top-Left) ---
        selectedPokemonDisplay.innerHTML = ''; // Clear
        const mainIcon = createPokemonIcon(pokemonName);
        if (mainIcon) {
            mainIcon.style.width = '100px'; mainIcon.style.height = '100px'; // Adjust size
            selectedPokemonDisplay.appendChild(mainIcon);
        }
        const namePara = document.createElement('p');
        namePara.textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        selectedPokemonDisplay.appendChild(namePara);


        // --- Update "Play With" (Synergy) Section ---
        const currentSynergy = synergyScores[pokemonName];
        let topSynergyPartners = [];
        if (currentSynergy) {
            topSynergyPartners = Object.entries(currentSynergy)
                .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) // Sort by score descending
                .map(([partnerName]) => partnerName.toLowerCase()); // Get names only (lowercase)
        }
        populatePokemonList(playWithList, topSynergyPartners);


        // --- Update Matchup Sections (Easy/Hard) ---
        const matchups = detailedMatchups[pokemonName];
        if (matchups) {
            populatePokemonList(easyMatchupList, matchups.easy);
            populatePokemonList(hardCounterList, matchups.hard);
        } else {
            // Clear lists if no data found
            populatePokemonList(easyMatchupList, []);
            populatePokemonList(hardCounterList, []);
            console.warn(`Detailed matchup data not found for ${pokemonName}`);
        }
    }

    // --- INITIALIZATION ---
    displayAllPokemonGrid(); // Populate the grid on load

}); // End DOMContentLoaded