import React, {useState} from 'react';

function CreateCharacterForm() {

    const [characterName, setCharacterName] = useState("");
    const [myersBriggs, setMyersBriggs] = useState("entp");
    const [enneagram, setEnneagram] = useState("");
    const [media, setMedia] = useState("");
  
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                        characterName: characterName,
                        myersBriggs: myersBriggs,
                        enneagram: enneagram,
                        media: media,
                }),
            });
            await res.json();
            if (res.status === 200) {
                setCharacterName("");
                setMyersBriggs("entp");
                setEnneagram("");
                setMedia("");
                alert("User created successfully");
            } else {
                alert("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    }
  
    return (
    <form onSubmit={handleSubmit}>
        <label>
        Name
        <input
            name="characterName"
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)} />
        </label>
        <br />
        <label>
        Media
        <input
            name="media"
            type="text"
            value={media}
            onChange={(e) => setMedia(e.target.value)} />
        </label>
        <br />
        <label>
        Myers Briggs:
        <select
            name="myersBriggs"
            value={myersBriggs}
            onChange={(e) => setMyersBriggs(e.target.value)}>
            <option value="istj">ISTJ</option>
            <option value="isfj">ISFJ</option>
            <option value="infj">INFJ</option>
            <option value="intj">INTJ</option>
            <option value="istp">ISTP</option>
            <option value="isfp">ISFP</option>
            <option value="infp">INFP</option>
            <option value="intp">INTP</option>
            <option value="estj">ESTJ</option>
            <option value="esfj">ESFJ</option>
            <option value="enfj">ENFJ</option>
            <option value="entj">ENTJ</option>
            <option value="estp">ESTP</option>
            <option value="esfp">ESFP</option>
            <option value="enfp">ENFP</option>
            <option value="entp">ENTP</option>
        </select>
        </label>
        <br/>
        <label>
        Enneagram
        <input
            name="enneagram"
            type="text"
            value={enneagram}
            onChange={(e) => setEnneagram(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Create" />
    </form>
    );
  }

  export default CreateCharacterForm;