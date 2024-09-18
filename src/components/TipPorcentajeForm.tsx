
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPorcentajeFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}
export default function TipPorcentajeForm({ setTip, tip }: TipPorcentajeFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina: </h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-4">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input id={tipOption.id} type="radio" value={tipOption.value} name="tip"
                            onChange={e => setTip(+e.target.value)}// +: convertir un string a numero
                            checked={tipOption.value === tip}// se le pasa el valor de la propina que se le pase, en este caso es cero
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
