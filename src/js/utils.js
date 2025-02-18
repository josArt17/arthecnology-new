const apiKey = import.meta.env.VITE_API_KEY;

export default function renderImages(){
    const link = "https://image.tmdb.org/t/p/original";
    const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&language=es-MX`;
    let contenedor = document.getElementById('contenedor');

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(promesa => {
        let urlImgFondo = promesa.results[Math.floor(Math.random() * 20)].backdrop_path;
        let imagen = link+urlImgFondo;
        
        document.body.style.backgroundImage = `url(${imagen})`;
        document.body.classList.add('bg-cover', 'bg-center'); 
    });
}