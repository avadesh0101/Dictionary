let word = document.getElementById("input");
let submit = document.getElementById("btn")
let result = document.querySelector(".result")


submit.addEventListener("click" , (e)=>{
   e.preventDefault();
   getWordInfo(word.value)
})


async function getWordInfo(word){


               try{

                              const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` ;

                         
                              const inputWord = await fetch(`${url}`).then(response=> response.json());

                              const definitions = inputWord[0].meanings[0].definitions[0];

                           
                              result.innerHTML = `<h4>Word: ${inputWord[0].word}</h4> 
                                                  <h4>Meaning: ${inputWord[0].meanings[0].definitions[0].definition}</h4>
                                                  <p>${inputWord[0].meanings[0].
                                                         partOfSpeech}</p>
                                                  <a href="${inputWord[0].sourceUrls[0]}
                                                  ">Read More</a>`
                           
                              console.log(inputWord);

                              // for(let i = 0 ; i<inputWord[0].meanings[0].antonyms.length ; i++){
                              //    result.innerHTML += `
                              //                         <li>${inputWord[0].meanings[0].antonyms[i]}</li>`            
                              // }

               }catch(e){
                    result.innerHTML = "<h4>Word Not Found</h4>"          

               }
  
}

