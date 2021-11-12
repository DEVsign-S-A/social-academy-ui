import { useState } from "react";

export const useFormProfile = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const resetInput = (input) => {
		if (input === "date") {
			setValues({
				...values,
				inputExperiencia: "",
				fechaInicio: "",
				fechaFinal: "",
			});
		} else {
			setValues({
				...values,
				[input]: "",
			});
		}
	};

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange, resetInput];
};
