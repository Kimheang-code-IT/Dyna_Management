// Utility function to load data from JSON files
export const loadDataFromJSON = async (filePath, localStorageKey) => {
  try {
    const data = await import(filePath)
    if (data.default && data.default.length > 0) {
      // Save to localStorage for compatibility
      localStorage.setItem(localStorageKey, JSON.stringify(data.default))
      return data.default
    }
  } catch (error) {
    console.error(`Error loading data from ${filePath}:`, error)
  }
  
  // Fallback to localStorage
  try {
    const saved = localStorage.getItem(localStorageKey)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (error) {
    console.error(`Error loading from localStorage for ${localStorageKey}:`, error)
  }
  
  return []
}

