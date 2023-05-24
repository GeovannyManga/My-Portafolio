import{ useState, useRef, useEffect } from 'react';
import {  } from "../styles/showmodals.css";
import cancion1 from "../assets/como-el-siervo.mp3";
import cancion2 from "../assets/Dios sabe.mp3";
import cancion3 from "../assets/tan solo Dios.mp3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faTimes } from '@fortawesome/free-solid-svg-icons';

const MiniReproductorAudio = () => {
  const [songs] = useState([
    { src: cancion1, title: 'Como el Siervo' },
    { src: cancion2, title: 'Dios Sabe' },
    { src: cancion3, title: 'Tan Solo Dios' },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    const playOnLoad = () => {
      const playPromise = audioElement.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Error al reproducir el audio:', error);
        });
      }
    };

    audioElement.src = songs[currentSongIndex].src;
    audioElement.addEventListener('canplaythrough', playOnLoad);

    return () => {
      audioElement.removeEventListener('canplaythrough', playOnLoad);
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [currentSongIndex]);

  const toggleReproducir = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const reproducirSiguiente = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const reproducirAnterior = () => {
    const prevIndex = (currentSongIndex + songs.length - 1) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  const quitarReproduccion = () => {
    setIsPlaying(false);
    const audioElement = audioRef.current;
    audioElement.pause();
    audioElement.currentTime = 0;
  };
  return (
    <div style={{ backgroundColor: '#9340FF', color: 'white' }} className='div-re'>
      <audio className='audio' ref={audioRef} src={songs[currentSongIndex].src}></audio>
      <div style={{ backgroundColor: '#9340FF', color: 'white' }} id='solo' className={`div-buttoms ${isPlaying ? 'expanded' : ''}`}>
        <button style={{ backgroundColor: '#9340FF', color: 'white' }} className='buttoms-audio' onClick={toggleReproducir}>
          {isPlaying ? (
            <FontAwesomeIcon style={{ backgroundColor: '#9340FF', color: 'white' }} icon={faPause} />
          ) : (
            <FontAwesomeIcon style={{ backgroundColor: '#9340FF', color: 'white' }} icon={faPlay} />
          )}
        </button>

        <button style={{ backgroundColor: '#9340FF', color: 'white' }} className='buttoms-audio' onClick={reproducirAnterior}>
          <FontAwesomeIcon style={{ backgroundColor: '#9340FF', color: 'white' }} icon={faStepBackward} />
        </button>

        <button className='buttoms-audio' onClick={reproducirSiguiente}>
          <FontAwesomeIcon style={{ backgroundColor: '#9340FF', color: 'white' }} icon={faStepForward} />
        </button>

        <button className='buttoms-audio' onClick={quitarReproduccion}>
          <FontAwesomeIcon
            style={{ backgroundColor: '#9340FF', color: 'white', marginRight: '2em' }}
            icon={faTimes}
          />
        </button>
      </div>
      <p style={{ backgroundColor: '#9340FF', color: 'white' }}>Canción actual: {songs[currentSongIndex].title}</p>
    </div>
  );
};

export default MiniReproductorAudio;
