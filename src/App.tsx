import { useEffect, useState } from "react"
import Input from "./components/Input"
import Conversor from "./components/Conversor"
import { Dolar } from "./types"


function App() {
	const [reales, setReales] = useState(0)
	const [dolares, setDolares] = useState(0)
	const [pesos, setPesos] = useState(0)
	const [valorDolar, setValorDolar] = useState<Dolar>({ brl: 0, ars: 0 });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
			fetch("https://api.mockfly.dev/mocks/eb5c1152-9d57-4453-a662-bc16294e4829/cambio") // Cambia la URL por la de tu API
			.then((response) => {
				if (!response.ok) throw new Error("Error al obtener los datos");
				return response.json();
			})
			.then((data) => {
				setValorDolar(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setLoading(false);
			});
	  	}, []);

	  	if (loading) return <p>Cargando...</p>;
		if (error) return <p>Error: {error}</p>;
	
  	return (
    	<>
		<header className="bg-gray-200 border-b-10 border-[rgb(44,88,151)]">
			<div className="mx-auto max-w-[80%] py-4 flex gap-2">
				<h1 className="uppercase text-black font-extrabold text-2xl my-auto">Conversor Floripa 2025</h1>
				<img className="h-12" src="https://images.emojiterra.com/twitter/v13.1/512px/1f334.png" alt="" />
			</div>
		</header>

		<section className="max-w-[80%] mx-auto">
			<h1 className="uppercase text-4xl font-extrabold my-6">reales a dolares</h1>
			<form action="" className="mb-8">
				<div className="flex flex-col gap-1.5">

					<Input 
					imagen={"https://wise.com/web-art/assets/flags/brl.svg"} 
					moneda={"brl"} 
					label={"cantidad"}
					reales={reales}
					setReales={setReales}
					dolares={dolares}
					setDolares={setDolares}
					setPesos={setPesos}
					valorDolar={valorDolar}>
					</Input>

					<p className="capitalize text-lg text-gray-500">Conversión</p>

					<Conversor 
					imagen={"https://wise.com/web-art/assets/flags/usd.svg"} 
					moneda={"usd"}
					valor={dolares}>
					</Conversor>

					<Conversor
					imagen={"https://wise.com/web-art/assets/flags/ars.svg"} 
					moneda={"ars"}
					valor={pesos}>
					</Conversor>
				</div>

			</form>
			
			<h2 className="text-3xl font-semibold uppercase text-gray-500 mb-2">Valores utilizados</h2>
			<p className="text-lg">1 Dolar = <span className="font-bold">{(1/valorDolar.brl).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Reales</span> </p>
			<p className="text-lg">1 Dolar = <span className="font-bold">{(1/valorDolar.ars).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Pesos</span> </p>
		</section>
    	</>
  	)
}

export default App
