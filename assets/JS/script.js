async function fetchCrypto() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
  
    try {
      const response = await fetch(apiUrl, { method: 'GET' });
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      return data.data; 
    } catch (error) {
      throw error;
    }
  }