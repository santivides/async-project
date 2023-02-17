API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXazgXDIYyWH-yXLAkcrFxw&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content'); //referencia a un elemento html donde vamos a agregar la iteracion de la peticion que vamos a hacer

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '27017b8cc3msh23327826a3e99cdp1af947jsnca7759c9a514',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = response.json();
    return data;
}

(async()=>{ //funcion anonima que se llama a si misma, cuando la dectecta, la llama y se desencadenan todas las consecuencias de la logica
    try{
        const videos = await fetchData(API);
        let view = ` ${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
              title
            </h3>
          </div>
        </div>
        `).slice(0, 4).join('')}
        
        `;
        content.innerHTML = view; //agregar insercion de la vista que creamos

    } catch(error){//usar un tamplatestream, hace usa de funciones de javascript o metodos
        
        console.log(error);
    }
})();