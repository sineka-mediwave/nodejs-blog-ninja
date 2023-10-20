# Node JS

- V8 engine complies javascript into machine code
- Node Js is written in c++
- Read & write files on a computer
- Connect to a database
- Act as a server for content
- Javascript -> Node.js (V8 engine) ->C++ -> assembly language -> machine code.

## Role of Node js

It handles the request coming from the website and runs the javascript code sends back the response to the website

## Learn about

- How to read and write files on our computer
- How to create a serve using node.js to create a website
- How to create an express app/website
- how to use MongoDB
- How to use template engines to easily create HTML views
- Put everything together to make a simple blog site.

## Client and Server

- http:domain.name lookes up for the IP address associated for that.

### LocalHost

localhost is like a domain name on the web, it points directly to our own computer.

- PortNumber are like 'doors' into a computer.

### Request and Response

```
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("content-type", "text/plain");
  res.write("hello");
});
```

requesting html page

```
res.setHeader('content-type', 'text/html');
fs.readfile('./views/index.html', (err, data)=> {
    if(err){
        console.log(err);
        res.end();
    }else{
        res.write(data);
        res.end();
    }
})
```
