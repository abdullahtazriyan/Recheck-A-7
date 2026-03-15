import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";

const Player = ({ player, handleplayer, selectedPlayers }) => {
    const { id, name, country, rating, hand_of_batting, price, cricketer_type, image, } = player;
    let included = false

    selectedPlayers.map(sp => {
        if (sp?.id === id) {
            included = true
        }
    })

    return (
        <div>
            <div className='p-3 space-y-4 border rounded-2xl'>
                <img className='w-96 h-60 rounded-xl' src={image} alt="" />
                <div className='flex items-center gap-4'>
                    <h1 className='text-2xl'><CgProfile></CgProfile></h1>
                    <h1 className='font-bold text-xl'>{name}</h1>
                </div>
                <div className="flex justify-between items-center">
                    <div className='flex items-center gap-3'>
                        <FaFlag></FaFlag>
                        <h1 className='font-semibold text-lg'>{country}</h1>
                    </div>
                    <button className="p-2 bg-[#ebe9e9] rounded-2xl">
                        <h1 className='font-semibold text-lg'>{cricketer_type}</h1>
                    </button>
                </div>
                <hr />
                <h1 className='font-bold text-xl'>Rating:{rating}</h1>
                <h1 className='font-bold text-xl'>{hand_of_batting}</h1>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-xl'>Price:{price}</h1>
                    {included ? 
                    <button className='border p-2 rounded-xl'>Choosen already</button> 
                    : 
                    <button onClick={() => handleplayer(player)} className='border p-2 rounded-xl'>Choose Player</button>}
                </div>
            </div>
        </div>
    );
};


export default Player;