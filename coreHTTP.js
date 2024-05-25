class CoreHTTP {
  async request(method, url, data = null) {
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (data) {
        options.body = JSON.stringify(data);
      }
      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`${method.toUpperCase()} Error: ${response.status}`);
      }

      return responseData;
    } catch (error) {
      throw error;
    }
  }

  async get(url) {
    return this.request('GET', url);
  }

  async post(url, data) {
    return this.request('POST', url, data);
  }

  async put(url, data) {
    return this.request('PUT', url, data);
  }

  async patch(url, data) {
    return this.request('PATCH', url, data);
  }

  async delete(url) {
    return this.request('DELETE', url);
  }
}