import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";

interface TextFieldProps {
	name: string;
	debug?: boolean;
	placeholder?: string;
}

const TextField: FC<TextFieldProps> = (props) => {
	const { register, watch, formState: { errors } } = useFormContext();
	if (props.debug) console.log(watch());

	return (
		<div>
			<label htmlFor={props.name} >{props.name}</label>
			<input id={props.name} {...register(props.name)}></input>
			{errors[props.name] !== undefined && <p>{(errors[props.name] as FieldError)?.message}</p>}
		</div>
	);
};

export default TextField;
