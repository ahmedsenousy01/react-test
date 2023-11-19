import "./App.css";
import Form from "./components/Form";
import TextField from "./components/TextField";

function App() {
	return (
		<Form>
			<TextField name="hehe lol" />
			<TextField name="nooooo" />
			<button type="submit" role="button">
				submit
			</button>
		</Form>
	);
}

export default App;
