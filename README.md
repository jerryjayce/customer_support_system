<select/>**Starting the docker container** <p>
    1) Make sure you have the latest version of docker installed on your machine <p>
    2) Run `docker build -t jerryjayce/support_system:v1 .` <p>
    3) Run `docker run -p 9900:9900 jerryjayce/support_system:v1` <p>
    
    
 
 
<select/>**Calling the endpoints**  <p>
    The endpoint can be called with postman or curl<p>
    
   1.) Postman (Get request):

    link to postman documentation:
   
   2.) Curl:
  
    curl --location --request GET 'http://127.0.0.1:9900/route
