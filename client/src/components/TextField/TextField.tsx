import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface TextFieldProps {
	name: string;
	debug?: boolean;
	placeholder?: string;
}

const TextField: FC<TextFieldProps> = (props) => {
	const { register, watch, formState } = useFormContext();
	const errors = formState.errors as Record<string, unknown>;
	if (props.debug) console.log(watch());

	return (
		<div>
			<label>{props.name}</label>
			<input {...register(props.name)}></input>
			{errors[props.name] !== undefined && <p>There is an error</p>}
		</div>
	);
};

export default TextField;
