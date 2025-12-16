/**
 * Search utility for handling both English and Khmer text
 * Normalizes text for proper searching across languages
 */

/**
 * Normalizes text for searching (handles both English and Khmer)
 * @param {string} text - The text to normalize
 * @returns {string} - Normalized text ready for searching
 */
export function normalizeSearchText(text) {
  if (!text) return ''
  
  // Convert to string and trim
  const str = String(text).trim()
  
  // For Khmer and other Unicode text, we don't need toLowerCase
  // but we can normalize Unicode characters
  // For English, we still want case-insensitive search
  try {
    // Normalize Unicode (handles composed/decomposed characters)
    const normalized = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    
    // For mixed content, we'll keep it as is but ensure consistent spacing
    return normalized.replace(/\s+/g, ' ').trim()
  } catch (e) {
    // Fallback to simple string conversion
    return str
  }
}

/**
 * Checks if a text contains the search query (supports both English and Khmer)
 * @param {string} text - The text to search in
 * @param {string} query - The search query
 * @returns {boolean} - True if text contains query
 */
export function textContains(text, query) {
  if (!text || !query) return false
  
  const normalizedText = normalizeSearchText(text)
  const normalizedQuery = normalizeSearchText(query)
  
  // For English text, make it case-insensitive
  // For Khmer text, direct comparison works
  const textLower = normalizedText.toLowerCase()
  const queryLower = normalizedQuery.toLowerCase()
  
  return textLower.includes(queryLower)
}

/**
 * Searches through an array of objects with multiple fields
 * @param {Array} items - Array of objects to search
 * @param {string} query - Search query
 * @param {Array<string>} fields - Array of field names to search in
 * @returns {Array} - Filtered array of items that match the query
 */
export function searchInFields(items, query, fields) {
  if (!query || !query.trim()) return items
  
  const normalizedQuery = normalizeSearchText(query)
  
  return items.filter(item => {
    return fields.some(field => {
      const fieldValue = item[field]
      if (!fieldValue) return false
      return textContains(String(fieldValue), normalizedQuery)
    })
  })
}

/**
 * Simple search function that works with both English and Khmer
 * @param {string} text - Text to search in
 * @param {string} query - Search query
 * @returns {boolean} - True if text contains query
 */
export function searchText(text, query) {
  return textContains(text, query)
}

