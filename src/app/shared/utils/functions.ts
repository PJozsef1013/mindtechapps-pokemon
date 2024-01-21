export const getCaughtPokemonsIds = (): string | null => {
  return localStorage.getItem('caughtPokemonsIds');
};

export const setCaughtPokemonsIds = (caughtPokemonsIds: string[]): void => {
  localStorage.setItem('caughtPokemonsIds', JSON.stringify(caughtPokemonsIds));
};

export const parseCaughtPokemonsIds = (caughtPokemonsIds: string): string[] => {
  return JSON.parse(caughtPokemonsIds);
};

export const updateCaughtPokemonsIds = (pokemonId: string): void => {
  const caughtPokemonsIds = getCaughtPokemonsIds();

  if (!caughtPokemonsIds) {
    return;
  }

  const parsedCaughtPokemonsIds = parseCaughtPokemonsIds(caughtPokemonsIds);

  let updatedCaughtPokemonsIds: string[] = [];

  if (parsedCaughtPokemonsIds.includes(pokemonId)) {
    updatedCaughtPokemonsIds = parsedCaughtPokemonsIds.filter(
      (id) => id !== pokemonId
    );
  } else {
    updatedCaughtPokemonsIds = [...parsedCaughtPokemonsIds];
    updatedCaughtPokemonsIds.push(pokemonId);
  }

  setCaughtPokemonsIds(updatedCaughtPokemonsIds);
};
