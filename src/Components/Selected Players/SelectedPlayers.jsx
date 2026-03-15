import React from 'react';
import SelectedPlayer from '../Selected player/SelectedPlayer';
import { addPlayer } from '../../Utilitise'

const SelectedPlayers = ({ selectedPlayers, handleDeletePlayer }) => {
    
    return (
        <div>
            {
                selectedPlayers.map(selectedPlayer =>
                    <SelectedPlayer
                        selectedPlayer={selectedPlayer}
                        handleDeletePlayer={handleDeletePlayer}
                        >
                    </SelectedPlayer>)
            }
            <div className='w-44 p-2 rounded-xl border-2 border-[#E7FE29]'>
                <button onClick={addPlayer} id='Add-Player' className='bg-[#E7FE29] w-full p-2 rounded-xl'>Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayers;