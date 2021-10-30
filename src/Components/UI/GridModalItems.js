import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { startLogout } from '../../Redux/Actions/authActions';
import { Grid } from '../Tailwind/Grid';
import { DivModal } from '../Tailwind/Modal';

import logoutIMG from '../../assets/UI_Login/logout.png';
import edit from '../../assets/UI_Login/editar.png'

export const GridModalItems = ({itemModal, setItemModal}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = async (e) =>{
        e.preventDefault();
        setItemModal(false);
        await dispatch(startLogout());
        localStorage.removeItem('lastPath');
    }

    const handleMyProfile = () =>{
        setItemModal(false);
        history.push('/MyProfile/:userId');
    }
    return (
        <div>
            {itemModal && (
                <OutsideClickHandler
                    onOutsideClick = {()=>{
                        setItemModal(false);
                    }}
                >
                    <DivModal $color_modal2>
						<Grid $grid_modal_items_container>
                            <button
								className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200"
								onClick={handleMyProfile}
							>
								<p className = "mx-2 text-gray-500 font-medium">Mi Perfil</p>
								<img src={edit} alt="Editar Perfil" className="w-5 mx-2" />
							</button>
							<button
								className="flex justify-center items-center rounded-md p-2 my-2 hover:bg-gray-200"
								onClick={handleLogout}
							>
								<p className = "mx-2 text-gray-500 font-medium">Cerrar Sesión</p>
								<img src={logoutIMG} alt="log out" className="w-5 mx-2" />
							</button>
						</Grid>
					</DivModal>
                </OutsideClickHandler>
            )}
        </div>
    )
}
