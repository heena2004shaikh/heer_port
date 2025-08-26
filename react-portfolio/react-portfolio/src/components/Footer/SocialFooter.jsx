import React from 'react'
import { SocialIcon } from 'react-social-icons';

const SocialFooter = ({values}) => {
  const {url} = values;
  return (
    
    <div >
        <SocialIcon className='scale-75 hover:scale-90 hover:transition-all hover:ease-in-out duration-300' url={url}/>
        
        
        
        
    </div>
  )
}

export default SocialFooter