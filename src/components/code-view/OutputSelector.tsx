import { usePixelContext } from '@/context/PixelContext'

export const OutputSelector = () => {
  const { setOutputType, outputType } = usePixelContext()
  return <fieldset className='format-selector'><legend className='sr-only'>Formato da saída</legend><div className='format-option'><input type='radio' name='output' id='binary' checked={outputType === 'bin'} onChange={() => setOutputType('bin')} /><label htmlFor='binary'>BIN</label></div><div className='format-option'><input type='radio' name='output' id='hex' checked={outputType === 'hex'} onChange={() => setOutputType('hex')} /><label htmlFor='hex'>HEX</label></div></fieldset>
}
