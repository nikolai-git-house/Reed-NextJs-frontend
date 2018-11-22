import { createSelector } from 'reselect'

const getItems = (state) => state.items

export const filterItemTypes = createSelector(
  [getItems],
  (items) => {
    switch (items.type) {
      default:
        return items.filter(item => item.type === 'hardware')
    }
  }
)