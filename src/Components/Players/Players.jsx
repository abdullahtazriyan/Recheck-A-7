import React, { useEffect, useState } from 'react';
import Player from '../Available player/Player';
import { btn } from '../../Utilitise';
import SelectedPlayer from '../Selected player/SelectedPlayer';
import SelectedPlayers from '../Selected Players/SelectedPlayers';

const Players = () => {

    const [players, setPlayers] = useState([])
    const [selectedPlayers, setSelectedPlayers] = useState([])
    const handleplayer = (men) => {
        console.log()
        console.log(men?.price)
        const plys = [...selectedPlayers, men]
        setSelectedPlayers(plys)
    }


    useEffect(() => {
        fetch("player.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(error => console.error(error))
    }, [])

    const handleDeletePlayer = (id) => {
        const remainingPlayers = selectedPlayers.filter(player => player.id !== id);
        setSelectedPlayers(remainingPlayers);
    }

    return (
        <div>
            <div className='md:flex mt-12 justify-between'>
                <h1 id='sectionHeading' className='font-bold text-2xl'>Available Players</h1>
                <div className="">
                    <button onClick={btn} id='available' className='p-4 border border-r-0 rounded-t-2xl  rounded-l-2xl rounded-b-2xl rounded-tr-none rounded-br-none font-semibold text-lg bg-[#E7FE29]'>Available</button>

                    <button onClick={btn} id='selected' className='p-4 border border-r-0 rounded-t-2xl rounded-b-2xl rounded-r-2xl rounded-tl-none rounded-bl-none font-semibold text-lg '>Selected (<span id='selectedPlayer'>{selectedPlayers.length}</span>)</button>
                </div>
            </div>

            <div id='Available-Player' className='grid grid-cols-1 md:grid-cols-3 gap-6  mt-8 '>
                {players.map(player =>
                    <Player
                        key={player.id}
                        player={player}
                        handleplayer={handleplayer}
                        selectedPlayers={selectedPlayers}
                    >
                    </Player>)}
            </div>

            <div id='selected-player' className='hidden'>
                <SelectedPlayers handleDeletePlayer={handleDeletePlayer} selectedPlayers={selectedPlayers}></SelectedPlayers>
            </div>
        </div>
    );
};

export default Players;