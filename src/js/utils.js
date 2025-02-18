const apiKey = import.meta.env.VITE_API_KEY;

export function renderImages(){
    const link = "https://image.tmdb.org/t/p/original";
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&language=es-MX`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(promesa => {
        let urlImgFondo = promesa.results[Math.floor(Math.random() * 20)].backdrop_path;
        let imagen = link+urlImgFondo;
        
        document.body.style.backgroundImage = `url(${imagen})`;
        document.body.classList.add('bg-cover', 'bg-center'); 
    });
}

export function validateInputNumber(input){
    const inputValue = input.value;
  if (inputValue.includes('e')) {
    input.value = inputValue.slice(0, -1);
    return;
  }
  const isNumber = !Number.isNaN(Number(inputValue));
  if (!isNumber) {
    input.value = inputValue.slice(0, -1);
  }
}


export function sanitizePassword(input) {
    const inputValue = input.value;
    const sanitizedValue = inputValue.replace(/[\\'"]/g, '\\$&'); 
    return sanitizedValue;
}