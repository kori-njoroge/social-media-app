import React, { useEffect, useState, useRef } from 'react'
import '../styles/makePost.css'
import logo from '../images/member.jpg'

export default function MakePost() {
    const [inputClicked, setInputClicked] = useState(false);
    const [postIn, setPostIn] = useState("")
    const [file, setFile] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState()
    const fileInput = useRef(null);

    function handleAttachClick() {
        fileInput.current.click();
    }

    function handleOption(event) {
        event.preventDefault();
        setPostIn(event.target.value)
    }

    function handleFileInputChange(event) {
        event.preventDefault();
        const files = event.target.files[0]
        setFile([...file, files])
    }

    useEffect(() => {
        console.log("This is the initial select value", selectedIndex);
        function handleDeleteSelectedFile() {
            console.log("This is the select", selectedIndex);
            if (selectedIndex === '') {
                setFile([...file])
                console.log("first")
            } else if (selectedIndex === 0) {
                let shifted = file.shift()
                setFile([...file])
                console.log("indexo log", setFile([...file]))

            } else {
                let spliced = file.splice(selectedIndex, 1)
                setFile([...file]);
                console.log("index1 log", setFile([...file]))

            }
        }
        handleDeleteSelectedFile()
    }, [selectedIndex])



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
                    {file !== [] && file?.map((filo, index) => (
                        <div className="selectedFile" key={index}>
                            <p>{filo.name}</p>
                            <p>
                                <p className='fileSize'>{(filo.size / 1000).toString()}KB</p>
                                <p style={{ borderLeft: '1px solid #aaaabb ', height: '20px' }}></p>
                                <i className="fa-solid fa-xmark" onClick={() => setSelectedIndex(index)}></i>
                            </p>
                        </div>
                    ))}
                    <div className='postMessage'>
                        <div className="selectDestination">
                            <select value={postIn} name="postIn" onChange={handleOption}>
                                <option value="Post in: Profile">Post in: Profile</option>
                                <option value="Post in: Group">Post in: Group</option>
                            </select>
                        </div>
                        <div className="classPostFooter">
                            <button
                                className="cancelPost"
                                onClick={() => setInputClicked(false)}
                            >Cancel</button>
                            <button className='submitPost'>Post update</button>
                        </div>
                    </div>
                    {postIn === 'Post in: Group' &&
                        <div className="searchGroups">
                            <input
                                type="text"
                                className='searchGroup'
                                placeholder='Start typing the group name...'
                            />
                        </div>
                    }
                </>
            }
        </div>
    )
}
