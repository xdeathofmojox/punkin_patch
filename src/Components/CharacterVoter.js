function CharacterVoter(props) {

    let vote1 = () => {
        console.log("Voted 1");
    }

    let vote2 = () => {
        console.log("Voted 2");
    }

    return (
        <div>
            <button onClick={vote1}>1 <img src="/logo192.png" alt=""/></button>
            <button onClick={vote2}>2 <img src="/logo192.png" alt=""/></button>
        </div>
    );
}

export default CharacterVoter;