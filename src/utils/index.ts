/**
 *
 * Function: Load data to local storage
 * @param key
 * @returns
 */
export const loadFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

/**
 *
 * Function: Save data to local storage
 * @param key
 * @param data
 */
export const saveToLocalStorage = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data))
}
