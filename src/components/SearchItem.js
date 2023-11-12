import '../Styling.css'
import search from '../images/icon-search.svg'
import play from '../images/icon-play.svg'

import React, {useState, useEffect} from 'react'

import axios from 'axios'

const SearchItem = () => {
    //const [SearchTerm, setSearchTerm] = useState (``);
    //const {searchTerm,setSearchTerm,getUser} = GetUserInfo();

    const [term, setTerm] = useState({})
    const [searchTerm, setSearchTerm] = useState('Keyboard')
    const [searchTermfull, setSearchTermfull] = useState('Keyboard')

    useEffect(()=> {
        axios
          .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTermfull}`)
          .then(res => {
            console.log(res.data)
            setTerm(res.data)
           })
           .catch(err => {
             console.log(err)
             })
          },[searchTermfull])


    const handleSubmit = () => {
      if (!searchTerm) {
        alert('Enter a word')
      
      }else{setSearchTermfull(searchTerm)}
    }


   let ref = String(Object.keys(term).map((obj) => { return term[obj].phonetics.map((x)=>x.audio)}))

  let trimmedRef= ref.trim().replace(',,', '');

    const playAudio = () => {
      const audio= new Audio(trimmedRef);

      console.log(audio);

      audio.play();
    
    };

  return (


    <div>
        <div className='displayForm'>
        <input className='searchText'
        type='text' 
        value={searchTerm}
        //defaultValue='keyboard'
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        required
        placeholder="Keyboard">
        </input>
        {/* <button id='srchbuttn' onClick={handleSubmit}>  */}
        <img className='searchLogo' 
         src={search} 
         alt='search-icon'
         onClick={handleSubmit}
         />
      </div>
      <div className='keyboard'>
      <table className='word_display'>
      <tr>
      <td align='left'><h1>
        <strong>{Object.keys(term).map((obj) => { return term[obj].word})}</strong></h1></td>
      <td rowSpan='2' className='Playlogo' align='right'>
      {/* {Object.keys(term).map((obj) => { return term[obj].phonetics.map((x)=>x.audio)})}
      {trimmedRef} */}
        <img src={play} alt='play-logo' onClick={playAudio}/> 

      </td>
      </tr>
      <tr>
        <td align='left'>{Object.keys(term).map((obj) => { return term[obj].phonetic})}</td>
      </tr>
      </table>
    </div>
    
    <div>
    {
    Object.keys(term).map((obj) => {
      return (
          <div>
              
              {term[obj].meanings.map((meaning, index) => (
                <div key={index} className='description'>
                <div className='partOfSpeech'>
                <div class='text'>
                <h2>{meaning.partOfSpeech} </h2>
                 </div>
                 <div class='horz_line'></div>
                 </div>
                  
                <p className='meaning'>Meaning</p>
                <div>
                      {meaning.definitions.map((data,idx) =>(
                        <div>
                          <div>
                        <ul className='meaning_list'>
                        <li key={idx}>{data.definition}</li> 
                </ul>
                </div>
                
                </div>
                )
                )}
                   <div><span>Synonyms: </span><span>{meaning.synonyms}</span></div>  
                </div>
                </div>
              ))}

          </div>
      )
    }) 
}

</div>

    
    <div className='webaddress'>
      <span className='source'>Source:   </span><span>{Object.keys(term).map((obj) => { return term[obj].sourceUrls})}</span></div>      
    
   </div>

  )

}

export default SearchItem
