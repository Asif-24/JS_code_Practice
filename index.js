


const makeRequest = (method,url,data) =>{
    const xhr = new XMLHttpRequest();

   xhr.open(method,url)
   xhr.setRequestHeader('Content-Type','application/json')
   xhr.onload = () => {
       let data = xhr.response;
        console.log(JSON.parse(data));
   }
   xhr.onerror = () =>{
        console.log('error is heir');
   }
   xhr.send(JSON.stringify(data))
}



const getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}

const setData = () =>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}
setData()

console.clear();

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "DELETE",
    body : JSON.stringify({
        id : 1,
        title: 'FARHAN',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
})
.then((res) => {
    if(!res.ok){
        const message = `Error : ${res.status}`
        throw new Error(message)
    }

    return res.json();
})
.then((res) => console.log(res))
.catch((err) => console.log(err))


const makeRequest = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        const message = `Eror : ${res.status}`;
        throw new Error(message)

    }
    const data = await res.json();
    return data;
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
const getData = () =>{
    makeRequest()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

getData();