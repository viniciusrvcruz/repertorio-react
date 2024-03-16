import spotifyIcon from './../assets/spotify_icon.png'
import deezerIcon from './../assets/deezer_music_icon.png'
import youtubeMusicIcon from './../assets/youtube_music_icon.png'
import appleMusicIcon from './../assets/apple_music_icon.png'
import amazonIcon from './../assets/amazon_icon.png'
import audioIcon from './../assets/audio_icon.png'

export const GetDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const date = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;

    return date
}

export const VideoId = (videoUrl) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(.*\/)?(watch\?v=)?|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;

    const youtubeMatch = videoUrl.match(youtubeRegex);

    if (youtubeMatch) return youtubeMatch[6]

    return ''
}

export const GetDigitalPlatform = (url) => {
    if(url.match(/spotify\.com/)) return spotifyIcon
    if(url.match(/deezer\.page\.link/)) return deezerIcon
    if(url.match(/music\.youtube\.com/)) return youtubeMusicIcon
    if(url.match(/music\.apple\.com/)) return appleMusicIcon
    if(url.match(/music\.amazon\.com/)) return amazonIcon

    return audioIcon
}
