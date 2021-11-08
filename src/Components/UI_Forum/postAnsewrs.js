import React, { useState } from "react";
import Picker, { SKIN_TONE_NEUTRAL } from "emoji-picker-react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import smile from "../../assets/UI_Forum/Smile.svg";
import send from "../../assets/UI_Forum/Send [Fill].svg";
import { startRequestAnswer } from "../../Redux/Actions/forumActions";

export const PostAnsewrs = ({idQuestion}) => {

    const dispatch = useDispatch();
	const [chosenEmoji, setChosenEmoji] = useState(null);
	const [postAnswer, setpostAnswer] = useState("");
	const [modal, setModal] = useState(false);

	const onEmojiClick = (event, emojiObject) => {
		setChosenEmoji(emojiObject);

        if (emojiObject.emoji !== "" || emojiObject.emoji !== null) {
            setpostAnswer(postAnswer + emojiObject.emoji);
        }
	};

	const handleInputChange = (e) => {
		setpostAnswer(e.target.value);
	};

	const handleSubmit = (e) => {
		let idAnswer = uuidv4();
		e.preventDefault();
        dispatch(startRequestAnswer(postAnswer, idQuestion, idAnswer));
		setpostAnswer('');
        setModal(false);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
                <div
                    className={`hidden` + (modal ? "block animate__animated animate__bounceInDown" : " animate__animated animate__bounceInDown")}

                >
                    <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_NEUTRAL} />
                </div>

				<div className="flex bg-gray-200 mx-10 py-1 focus:shadow-lg rounded-md">
					<div className="bg-gray-300 p-3 m-2 rounded-md shadow-sm cursor-pointer"
                        onClick={() => setModal(!modal)}
                    >
						<img src={smile} alt={smile} />
					</div>
					<input
						name="postAnswer"
						value={postAnswer}
						onChange={handleInputChange}
						className="outline-none bg-gray-200 w-11/12 font-Poppins text-gray-700"
						placeholder="Escreibe algo.."
					/>
					<button
						className="bg-BlueSocial p-3 m-2 rounded-md shadow-sm"
						onClick={handleSubmit}
					>
						<img src={send} alt={send} />
					</button>
				</div>
			</form>
		</>
	);
};
