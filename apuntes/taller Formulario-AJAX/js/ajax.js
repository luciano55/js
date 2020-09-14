/*** Curso Javascript: 106 AJAX: Objeto XMLHttpRequest - 106*/
(()=>{
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();
       console.log(xhr);
        xhr.addEventListener("readystatechange", e =>{
          if(xhr.status >= 200 && xhr.status < 300){
            //console.log("éxito");
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
          // console.log(json);
            json.forEach(el => {
              const $li = document.createElement("li");
              $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
              $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
          }else{
           // console.log("error");
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML =`Error ${xhr.status}:${message}`;
          }
            if(xhr.readyState !== 4) return;
           // console.log(xhr);
        } );
      //  xhr.open("GET","https://jsonplaceholder.typicode.com/users");
      xhr.open("GET","assets/users.json");
        xhr.send();

})();
/*** Curso Javascript: 107 AJAX:  API Fetch 107 */
(()=>{
 const $fetch = document.getElementById("fetch"),
 $fragment = document.createDocumentFragment();
 //fetch("https://jsonplaceholder.typicode.com/users")
 fetch("assets/users.json")
 /*.then(res=>{
   console.log(res);
  return  res.ok ? res.json() : Promise.reject(res);
})*/
.then((res)=>res.ok ? res.json() : Promise.reject(res))
.then((json)=>{
  //console.log("JSON:",json);
  //$fecth.innerHTML = json;  
  json.forEach((el) => {

    const $li = document.createElement("li");
    
    $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
    $fragment.appendChild($li);
  });
  $fetch.appendChild($fragment);
}).catch((err)=>{
  // console.log("Estamos en el catch",err);
   let message = err.statusText || "Ocurrió un error";
   $fetch.innerHTML = `Error ${err.status}: ${message}`;
 }).finally(()=>console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch"));
})();
/*** Curso Javascript: 108 AJAX:  API Fetch + Async-Await 108*/
(()=>{
  const $fetchAsinc = document.getElementById("fetch-async"),
  $fragment = document.createDocumentFragment();
 
  async function getData(){
    try{
      let res = await  fetch("https://jsonplaceholder.typicode.com/users"),
      json = await res.json();
      //console.log(res,json);
      //  if(!res.ok) throw new Error("Ocurrió un Error al solicitar los datos "); // new Error(string)
      if(!res.ok) throw {status: res.status, statusText: res.statusText};
      json.forEach((el) => {
        const $li = document.createElement("li");        
        $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsinc.appendChild($fragment);
    }catch(err){
     // console.log("Estamos en el catch",err);
      let message = err.statusText || "Ocurrió un error";
      $fetchAsinc.innerHTML = `Error ${err.status}: ${message}`;
    }finally{

    }
  } 
  getData();
})();
/*** Curso Javascript: 109 AJAX: Librería Axios 109*/
(()=>{
  const $axios = document.getElementById("axios"),
  $fragment = document.createDocumentFragment();
 axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(res => {
   // console.log(res);
    let json = res.data;
    json.forEach((el) => {

      const $li = document.createElement("li");
      
      $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
      $fragment.appendChild($li);
    });
    $axios.appendChild($fragment);
  })
  .catch(err=>{
    //console.log("Estamos en el catch", err)
     let message = err.response.statusText || "Ocurrió un error";
       $axios.innerHTML = `Error ${err.response.status}: ${message}`;
  })
  .finally(()=>{
   // console.log("Esto se ejecutará independientemente del resultado Axios");
  });
})();
/*** Curso Javascript: 110 AJAX: Librería Axios + Async-Await 110*/
(()=>{
  const $axiosAsync = document.getElementById("axiosAsync"),
  $fragment = document.createElement("div"); //document.createDocumentFragment();
 
 async function getData(){
   try{
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
      json = await res.data;
     // console.log(res,json);
      json.forEach((el) => {
        const $li = document.createElement("li");      
          $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
          $fragment.appendChild($li);
    });
    $axiosAsync.appendChild($fragment);
   }catch(err){
    let message = err.response.statusText || "Ocurrió un error";
    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
   }finally{
    console.log("Esto se ejecutará independientemente del resultado del try...catch");
   }
 }
getData();
})();
