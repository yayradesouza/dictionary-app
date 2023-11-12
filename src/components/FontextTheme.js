import {createContext, useState, useContext} from 'react'
import React from 'react'

const Fontext = createContext();




export const FontextTheme = ({children}) => {
/*     const [FontMonospace, setFontMonospace]= useState(false);
    const [FontSerif, setFontSerif]= useState(false);
    const [FontSansSerif, setFontSansSerif]= useState(false); */

    const [selectedFont, setSelectedFont] = useState('Sans-Serif');

    const changeFont = (newFont) => {
        setSelectedFont(newFont);
    }

    /* function changeFontMonospace() {
        setFontMonospace((prev) => !(prev))
    }

    function changeFontSerif() {
        setFontSerif((prev) => !(prev))
    }

    function changeFontSansSerif() {
        setFontSansSerif((prev) => !(prev))
    }
 */
  return (
  <Fontext.Provider
   value ={{selectedFont, changeFont}} >
    {children}
  </Fontext.Provider>
  )
}

export const useFont = ()=> useContext(Fontext)

//export default FontextTheme

