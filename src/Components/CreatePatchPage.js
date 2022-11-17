import CreatePatchForm from "./CreatePatchForm"

function CreatePatchPage()
{
    const characters = [{value: 1, label: "Ichigo"}, {value: 2, label: "Soap"}, {value: 3, label: "Sephiroth"}, {value: 4, label: "Yoruichi"}, {value: 5, label: "Aizawa"}];

    return (
        <div>
            <h1>Create Patch Page</h1>
            <CreatePatchForm characters={characters}/>
        </div>
    );
}

export default CreatePatchPage;