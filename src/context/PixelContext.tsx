import React, { useCallback, useContext, useState } from 'react'

export interface IPixelContext {
  pixels: boolean[][]
  setPixel: (x: number, y: number, status: boolean) => void
  togglePixel: (x: number, y: number) => void
  clearPixels: () => void
  getBinaries: () => string[]
  getHex: () => string[]
  isEmpty: () => boolean
  invertPixels: () => void
  outputType: 'bin' | 'hex'
  setOutputType: (type: 'bin' | 'hex') => void
}

export interface IPixelContextProvider {
  children: React.ReactNode
}

const PixelContext = React.createContext<IPixelContext>({} as IPixelContext)

export const usePixelContext = () => useContext(PixelContext)

export const PixelContextProvider = ({ children }: IPixelContextProvider) => {

  const [outputType, setOutputType] = useState<'bin' | 'hex'>('bin')

  const initializeMatrix = () => {
    const cols = 5;
    const rows = 8;
    const initialMatrix: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
    return initialMatrix;
  };

  const [pixels, setPixels] = useState<boolean[][]>(initializeMatrix)

  const clearPixels = () => {
    setPixels([...initializeMatrix()])
  }

  const setPixel = useCallback((x: number, y: number, status: boolean) => {
    const newPixels = [...pixels]
    newPixels[x][y] = status
    setPixels(newPixels)
  }, [pixels])

  const togglePixel = useCallback((x: number, y: number) => {
    setPixel(x, y, ![...pixels][x][y])
  }, [pixels])

  const getBinaries = useCallback(() => {
    let binaries: string[] = []
    for (let y = 0; y < 8; y++) {
      let binary = '0b'
      for (let x = 0; x < 5; x++) {
        binary += pixels[x][y] ? '1' : '0'
      }
      binaries.push(binary)
    }
    return binaries
  }, [pixels])

  const getHex = useCallback(() => {
    let hex: string[] = []
    for (let y = 0; y < 8; y++) {
      let sum = 0
      for (let x = 0; x < 5; x++) {
        sum = sum + ((pixels[x][y] ? 1 : 0) * Math.pow(2, 4 - x))
      }
      hex.push('0x' + `${sum < 16 ? '0' : ''}` + sum.toString(16).toUpperCase())
    }
    return hex
  }, [pixels])

  const isEmpty = useCallback(() => {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 5; x++) {
        if (pixels[x][y]) {
          return false
        }
      }
    }
    return true
  }, [pixels])

  const invertPixels = useCallback(() => {
    const newPixels = [...pixels]
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 5; x++) {
        newPixels[x][y] = !newPixels[x][y]
      }
    }
    setPixels(newPixels)
  }, [pixels])

  return <PixelContext.Provider value={{ pixels, setPixel, togglePixel, clearPixels, getBinaries, getHex, isEmpty, invertPixels, outputType, setOutputType }}>
    {children}
  </PixelContext.Provider>
}