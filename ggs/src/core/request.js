async function makeMultipleRequests() {
    const request1 = fetch('https://api.example.com/endpoint1', { method: 'POST' });
    const request2 = fetch('https://api.example.com/endpoint2', { method: 'POST' });
    const request3 = fetch('https://api.example.com/endpoint3', { method: 'POST' });
  
    try {
      const responses = await Promise.all([request1, request2, request3]);
      const responseData = await Promise.all(responses.map(response => response.json()));
      
      // 处理每个请求的结果
      const response1Data = responseData[0];
      const response2Data = responseData[1];
      const response3Data = responseData[2];
      
      // 其他逻辑...
    } catch (error) {
      // 处理错误
    }
  }
  
  makeMultipleRequests();