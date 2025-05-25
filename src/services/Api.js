export const SearchApi = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
}