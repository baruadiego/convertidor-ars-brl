import { useEffect } from "react"
import { Dolar } from "../types"

type inputProps = {
    imagen: string,
    moneda: string,
    label?: string,
    reales: number,
    setReales: React.Dispatch<React.SetStateAction<number>>,
    dolares: number,
    setDolares: React.Dispatch<React.SetStateAction<number>>,
    setPesos: React.Dispatch<React.SetStateAction<number>>,
    valorDolar: Dolar
}

export default function Input ({imagen, moneda, reales, setReales, dolares, setDolares, setPesos, valorDolar, label = ""} : inputProps) {
    useEffect(() => {
        setDolares(reales * valorDolar.brl)
    }, [reales])

    useEffect(() => {
        setPesos(dolares / valorDolar.ars)
    }, [dolares])

  return (
    <>
        <label className="capitalize text-lg text-gray-500" htmlFor="">{label}</label>
        <div className="grid grid-cols-[80%_20%] gap-2 border-1 border-gray-400 rounded-lg p-3 mb-6 last-of-type:mb-0">
            <input id={moneda} placeholder="0" type="number" className="text-xl focus:outline-none focus:ring-0" onChange={e => setReales(+e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }}}/>

            <div className="grid grid-cols-2 gap-1">
                <img className="" src={imagen} alt="" />
                <p className="font-bold my-auto uppercase">{moneda}</p>
            </div>
        </div>
    </>
  )
}
