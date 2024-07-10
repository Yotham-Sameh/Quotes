let Quotes = [
    {
        Quote:"Do not take life too seriously. You will not get out alive.",
        auther:"Elbert Hubbard"
    },
    {
        Quote:"The best revenge is massive success.",
        auther:"Frank Sinatra",
    },
    {
        Quote:"You miss 100% of the shots you don't take.",
        auther:"Wayne Gretzy",
    },
    {
        Quote:"It's not what happens to you, but how you react to it that matters.",
        auther:"Epictetus",
    },
    {
        Quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        auther:"Nelson Mandela"
    }
];

let  newindex;
let  lastindex;

 function get(){
    do{
         newindex = Math.floor(Math.random() * Quotes.length);   
    }while(newindex == lastindex);
   lastindex = newindex
    
 console.log(newindex);
 document.getElementById("Quote").innerHTML=Quotes[newindex].Quote;

 document.getElementById("auther").innerHTML=Quotes[newindex].auther;
 }

