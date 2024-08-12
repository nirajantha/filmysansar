import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(config => {
  // Modify the request configuration before sending it
  config.headers['Authorization'] = 'Bearer your_token';
  config.headers['Custom-Header'] = 'CustomValue';
  console.log('Request Interceptor:', config);
  return config;
}, error => {
  // Handle the error
  return Promise.reject(error);
});


// Add a response interceptor
axios.interceptors.response.use(response => {
    // Process the response data
    console.log('Response Interceptor:', response);
    return response;
  }, error => {
    // Handle the error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
      console.error('Unauthorized error:', error.response);
    }
    return Promise.reject(error);
  });