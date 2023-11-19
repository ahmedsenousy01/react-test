import { ComponentProps, FC } from "react";
import {
	FormProvider,
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
} from "react-hook-form";

function warningSubmitHandler(data: Record<string, string | number | boolean>) {
	console.warn("Form not handled by `onSubmit`. Here is the form data: ", data);
}

const Form: FC<
	Omit<ComponentProps<"form">, "onSubmit"> & {
		onSubmit?: SubmitHandler<Record<string, string | number | boolean>>;
		onError?: SubmitErrorHandler<Record<string, string | number | boolean>>;
		model?: Record<string, string | number | boolean>;
	}
> = (props) => {
	const { children, model, onSubmit, ...formProps } = props;
	const submitHandler =
		onSubmit === undefined ? warningSubmitHandler : onSubmit;

	const methods = useForm<NonNullable<typeof model>>();

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(submitHandler)} {...formProps}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
