export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getIsLoading = state => state.isLoading;

export const filteredContacts = state => {
  const contacts = getContacts(state);
  console.log('contacts', contacts);
  const filter = getFilter(state);
  const normalizedContact = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedContact),
  );
};
