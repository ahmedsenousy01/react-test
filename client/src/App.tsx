import { z } from "zod";
import "./App.css";
import Form from "./components/Form";
import TextField from "./components/TextField";

const schema = z.object({
	email: z.string().email().min(1, {
		message: "Please enter your email address"
	}),
	password: z.string().min(1, { message: "Please enter your password" })
});

function App() {
	return (
		<Form onSubmit={(data) => console.log(data)} schema={schema}>
			<TextField name="email" />
			<TextField name="password" />
			<button type="submit">
				submit
			</button>
		</Form >
	);
}

export default App;
