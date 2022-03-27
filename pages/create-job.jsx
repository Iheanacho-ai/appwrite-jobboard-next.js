import { useEffect, useState } from "react";

const CreateJob = () => {
    const [jobBoard, setJobBoard] = useState('')

    const handleJobBoard = () => {
        console.log(jobBoard)

        
    }

    useEffect(() => {
        console.log('developer', jobBoard)
    }, [jobBoard])

    return(
        <div className="create-job">
            <form action="">
                <label htmlFor="input">Job Board</label>
                <input type="text" value={jobBoard} onChange = {(e) => setJobBoard(e.target.value)}/>
                <button onClick={handleJobBoard}>Add Job</button>
            </form>
            <p>See your Job Board <a href="">here</a></p>
        </div>
    )
}

export default CreateJob;