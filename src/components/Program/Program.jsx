import React from 'react'
import './Program.css'
import Hero1 from '../../assets/imgs/hero 1.jpg'
import Hero2 from '../../assets/imgs/hero 2.jpg'
import Hero3 from '../../assets/imgs/hero 3.jpg'
import { BookOpenText, ClipboardPenLine, Handshake } from 'lucide-react'
export default function Program() {
  return (
    <div className='programs'>
        {/* <div className='container'> */}
            <div className='program'>
                <img src={Hero1} />
                <div className="capiton">
                     <Handshake size={40}/>
                     <p>Graduation degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={Hero2}/>
                <div className="capiton">
                      <BookOpenText size={40}/>
                     <p>Masters degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={Hero3}/>
                <div className="capiton">
                      <ClipboardPenLine size={40}/>
                     <p>Post Graduation</p>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}
