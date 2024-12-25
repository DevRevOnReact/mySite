function imgLoad(url){
  return new Promise((resolve, reject)=> {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function () {
      if(request.status === 200){
        resolve(request.response);
      } else {
        reject(
          Error(
            `Image${request.statusText}`
          )
        );
      }
    };
    request.onerror = function () {
      reject(Error('the error'));
    };
    request.send();
  });
}
imgLoad('htttps://youtube.com');
