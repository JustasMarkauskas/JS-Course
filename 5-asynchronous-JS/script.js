// const second = () =>{
//     setTimeout(()=>{
//         console.log('Async Hey there');
//     }, 2000);
// }

// const first = () => {
//     console.log('Hey there');
//     second()
//     console.log('The end ');
// }
// first();

// function getRecipe(){
//     setTimeout(()=>{
//         const recipeID = [523,641,685,795,541];
//         console.log(recipeID);

//         setTimeout(id=>{
//             const recipe = {title: 'Fresh tomato pasta', publisher: 'Justas'};
//             console.log(`${id}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe2 = {title: 'Italian Pizza', publisher: 'Justas'};
//                 console.log(`${publisher}: ${recipe2.title}`);
//             },1500, recipe.publisher)

//         },1500, recipeID[2])

//     },1500)
// }
// getRecipe();

//Lecture: Promises

// const getIDs = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve([523,641,685,795,541]);
//     }, 1500);   

// });

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {title: 'Fresh tomato pasta', publisher: 'Justas'};
//             resolve(`${ID}: ${recipe.title}`);
//         },1500, recID);        
//     });
// }

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub =>{
//             const recipe = {title: 'Italian Pizza', publisher: 'Justas'};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher)
//     })
// };

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2])
// })
// .then(recipe=>{
//     console.log(recipe);
//     return getRelated('Justas');
// })
// .then(recipe =>{
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error');
// });


// Lecture: from promises to async/await


// const getIDs = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve([523,641,685,795,541]);
//     }, 1500);   

// });

// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout(ID => {
//             const recipe = {title: 'Fresh tomato pasta', publisher: 'Justas'};
//             resolve(`${ID}: ${recipe.title}`);
//         },1500, recID);        
//     });
// }

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub =>{
//             const recipe = {title: 'Italian Pizza', publisher: 'Justas'};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher)
//     })
// };

// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2])
// })
// .then(recipe=>{
//     console.log(recipe);
//     return getRelated('Justas');
// })
// .then(recipe =>{
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error');
// });

// async function getRecipesAW () {
//    const IDs = await getIDs;
//    console.log(IDs);
//    const recipe = await getRecipe(IDs[2]);
//    console.log(recipe);
//    const related = await getRelated('Justas');
//    console.log(related);

//    return recipe;
// }
// getRecipesAW().then(result => console.log(`${result} is the best ever`));

//Lecture: AJAX and API
//Lecture: Making AJAX Calls with Fetch and Promises

function getWeather(woeid){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            //console.log(result);
            return result.json();
        })
        .then(data => {
            //console.log(data);

            const today = data.consolidated_weather[0];
            console.log(`Temperature today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);


        })
        .catch(error => console.log(error));
}

getWeather(2459115);
getWeather(44418);
getWeather(615702);
getWeather(1105779);
getWeather(2442047);


//ASYNC/AWAIT

async function getWeatherAW(woeid){
    try{
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
    // console.log(data);
        const tomorow = data.consolidated_weather[1];
        console.log(`Temperature tomorow in ${data.title} stay between ${tomorow.min_temp} and ${tomorow.max_temp}.`);
        return data;
    }catch(error){
        console.log(error);
    }
    
}


getWeatherAW(2459115);
getWeatherAW(44418);
getWeatherAW(615702);
getWeatherAW(1105779);
getWeatherAW(2442047);

let dataNewYork;
getWeatherAW(2442047).then(data => {
    dataNewYork = data;
    console.log(dataNewYork);
});









