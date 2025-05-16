type conversorProps = {
    imagen: string,
    moneda: string,
    valor: number
}

export default function Conversor({imagen, moneda, valor}: conversorProps) {
  return (
    <>
        <div className="grid grid-cols-[80%_20%] gap-2 border-1 border-gray-400 rounded-lg p-3 mb-6 last-of-type:mb-0">
            <p  className="my-auto text-xl focus:outline-none focus:ring-0" >{valor.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

            <div className="grid grid-cols-2 gap-1">
                <img className="" src={imagen} alt="" />
                <p className="font-bold my-auto uppercase">{moneda}</p>
            </div>
        </div>
    </>
  )
}
