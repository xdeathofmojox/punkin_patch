import { useParams } from 'react-router';
import CharacterVoter from './CharacterVoter'

function PatchVoterPage()
{
    const { id } = useParams();
    return (
        <div>
            <h1>Patch ID: {id}</h1>
            <CharacterVoter />
        </div>
    );
}

export default PatchVoterPage;