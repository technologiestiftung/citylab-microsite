export async function getSpreadsheet(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw "There has been an error";
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
