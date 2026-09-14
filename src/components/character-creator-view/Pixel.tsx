interface PixelProps { active: boolean; x: number; y: number; onClick: () => void }
export const Pixel = ({ active, x, y, onClick }: PixelProps) => <button type='button' className={`pixel ${active ? 'pixel--active' : ''}`} aria-label={`Pixel coluna ${x + 1}, linha ${y + 1}: ${active ? 'aceso' : 'apagado'}`} aria-pressed={active} onClick={onClick} />
