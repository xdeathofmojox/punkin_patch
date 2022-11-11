import { useParams } from 'react-router';

function ViewCharacterPage()
{
    const { id } = useParams();
    return (
        <div>
            <h1>Character ID: {id}</h1>
        </div>
    );
}

export default ViewCharacterPage;