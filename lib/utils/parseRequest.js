module.exports = rawRequest => {
  console.log(rawRequest.split('\n')[0].split(' '));
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  console.log([method, path]);
    
  if(method === 'GET' && path === '/'){
    return {
      method: 'GET',
      path: '/'
    };
  } else if(method === 'POST' && path === '/'){
    return {
      method: 'POST',
      path: '/',
      body: '{"name":"spot"}'
    };
  }
};
    



