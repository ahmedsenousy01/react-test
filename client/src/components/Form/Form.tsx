import { ComponentProps, FC } from "react";
import {
	FormProvider,
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormValues = Record<string, string | number | boolean>;

function warningSubmitHandler(data: FormValues) {
	console.warn("Form not handled by `onSubmit`. Here is the form data: ", data);
}

const Form: FC<
	Omit<ComponentProps<"form">, "onSubmit"> & {
		onSubmit?: SubmitHandler<FormValues>;
		onError?: SubmitErrorHandler<FormValues>;
		model?: FormValues;
		schema: z.ZodTypeAny
		validationMode?: "all" | "onSubmit" | "onTouched" | "onBlur" | "onChange";
	}
> = (props) => {
	const { children, model, onSubmit, schema, validationMode, ...formProps } = props;
	const submitHandler =
		onSubmit ?? warningSubmitHandler;

	const methods = useForm<NonNullable<typeof model>>({
		resolver: zodResolver(schema),
		mode: validationMode ?? "onSubmit",
	});

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(submitHandler)} {...formProps}>
				{children}
			</form>
		</FormProvider>
	);
};

export default Form;
