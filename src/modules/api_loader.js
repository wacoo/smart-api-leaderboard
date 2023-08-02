class APILoader {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/STR61BizczetMid1GTrD/scores';
  }

  async getData() {
    const response = await fetch(this.url);
    const result = await response.json();
    return result;
  }

  async setData(data) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json;
      return { id: 1, message: 'Score added successfully!', result: await result };
    } catch (error) {
      return { id: 0, message: 'Error: error submitting data!', result: error };
    }
  }
}

const loader = new APILoader();
export default loader;