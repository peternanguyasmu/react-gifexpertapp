export const getGifs = async( category ) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=8&api_key=4dBId3DkLLvcrHHFn2WIgcIC559gVW6E`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
    
}