import { useParams } from "react-router-dom";


function User() {
    const { userId } = useParams();
    return (
        <>
            <h1 className="text-center text-xl py-10 bg-purple-50">Dynamic: { userId}</h1>
        </>
    )
}

export default User;
