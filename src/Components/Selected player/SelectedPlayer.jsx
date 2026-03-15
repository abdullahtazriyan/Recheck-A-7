import { MdDeleteForever } from "react-icons/md";
import {remove} from '../../Utilitise'

const SelectedPlayer = ({ selectedPlayer, handleDeletePlayer }) => {
    const { name, image, hand_of_batting, id } = selectedPlayer

    return (
        <div>
            <div id="SP" className="flex justify-between items-center mt-8 mb-8 p-4 border rounded-3xl">
                <div className="flex items-center">
                    <img className="w-20 h-20 rounded-xl" src={image} alt="" />
                    <div>
                        <h1 className="text-xl font-bold ml-4">{name}</h1>
                        <h1 className="text-xl font-bold ml-4">{hand_of_batting}</h1>
                    </div>
                </div>
                {/* <h1 onClick={remove} className="text-4xl 
                text-red-800"><MdDeleteForever></MdDeleteForever></h1> */}

                <button onClick={() => handleDeletePlayer(id)} className="text-4xl text-red-800"><MdDeleteForever></MdDeleteForever></button>
            </div>
        </div>
    );
};

export default SelectedPlayer;