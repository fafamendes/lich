import { usePixelContext } from "@/context/PixelContext"

export const OutputSelector = () => {

  const { setOutputType, outputType } = usePixelContext()

  return (
    <div>
      <form>
        <fieldset className="flex gap-4 mb-4 ">
          <legend>Tipo de saída</legend>
          <input type="radio"
            name="output"
            id="binary"
            checked={outputType === 'bin'}
            onChange={() => setOutputType('bin')} />
          <label htmlFor="binary">Bin</label>
          <input
            type="radio"
            name="output"
            id="hex"
            checked={outputType === 'hex'}
            onChange={() => setOutputType('hex')}
          />
          <label htmlFor="hex">Hex</label>
        </fieldset>
      </form>
    </div>
  )
}
