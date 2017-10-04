// @flow

export function createEntry(entry: { date: string, body: string, feeling: string, isStarred: boolean }) {
  return {
    type: 'CREATE_ENTRY',
    payload: entry,
  };
}

export function updateEntry(entry: { _id: string, date: string, body: string, feeling: string, isStarred: boolean }) {
  return {
    type: 'UPDATE_ENTRY',
    payload: entry,
  };
}

export function deleteEntry(id: string) {
  return {
    type: 'DELETE_ENTRY',
    payload: id,
  };
}
