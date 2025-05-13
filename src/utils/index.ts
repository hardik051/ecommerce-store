/**
 *
 * Function: Load data to local storage
 * @param {string} key
 * @returns
 */
export const loadFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

/**
 *
 * Function: Save data to local storage
 * @param {string} key
 * @param {unknown} data
 */
export const saveToLocalStorage = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data))
}
