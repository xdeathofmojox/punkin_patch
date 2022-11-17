import CharacterCard from "./CharacterCard"

function ViewCharactersPage()
{
    const characters = [{value: 1, label: "Ichigo"}, {value: 2, label: "Soap"}, {value: 3, label: "Sephiroth"}, {value: 4, label: "Yoruichi"}, {value: 5, label: "Aizawa"}];

    return (
        <div>
            <h1>View Characters Page</h1>
            {characters.map((element, index) => (
                <div className="form-inline" key={index}>
                    <CharacterCard id={element.value} />
                </div>
            ))}
        </div>
    );
}

export default ViewCharactersPage;