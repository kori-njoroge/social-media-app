import React, { useEffect, useState,useRef } from 'react'
import '../styles/makePost.css'
import logo from '../images/member.jpg'

export default function MakePost() {
    const [inputClicked, setInputClicked] = useState(true);
    const[file,setFile]= useState(null);
    const fileInput = useRef(null);

    function handleAttachClick(){
        fileInput.current.click();
    }

    function handleFileInputChange(event){
        event.preventDefault();
        const file = event.target.files[0]
        setFile(file)
    }


    const username = 'Kori'
    return (
        <div className='makePost'>
            < div className='makePostContainer'>
                <img className='userPhoto' src={logo} alt="user image" />
                {inputClicked ?
                    <textarea
                        placeholder={`What's new, ${username}?`}
                    >
                    </textarea>
                    :
                    <input
                        type="text"
                        placeholder={`What's new ${username}`}
                        onClick={() => {
                            setInputClicked(true)
                            console.log(inputClicked)
                        }}
                    />}
            </div>
            {inputClicked &&
                <>
                    <hr />
                    <div className='attachMedia'>
                        <i className="fa-solid fa-paperclip" onClick={handleAttachClick}></i>
                        <button onClick={handleAttachClick}>Attach media</button>
                        <input type="file" ref={fileInput} style={{ display: "none" }} onChange={handleFileInputChange} />
                    </div>
                    <hr />
                    <div className='postMessage'>
                        <div className="selectDestination">
                            <select name="Postin" id="">
                                <option value="">Post in: Profile</option>
                                <option value="">Post in: Group</option>
                            </select>
                        </div>
                        <div className="">
                        <button 
                        className="cancelPost"
                        onClick={()=>setInputClicked(false)}
                        >Cancel</button>
                        <button className='submitPost'>Post update</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
