module.exports = rawRequest => {
 
 
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const body = rawRequest.split(/\r?\n\r?\n/)[1];
    
  if(method === 'POST'){
    return {
      method: `${method}`,
      path: `${path}`,
      body: `${body}`
    };
    
  } else {
    return {
      method: `${method}`,
      path: `${path}`
    };
  } 
  
};
    



