import EvenSwitchBtn from "./buttons/EvenSwitchBtn.tsx";
import './Job.css';
interface jobProps {
    company: string; 
    position: string;
    date: string;
    logo: string;
    accomplishments: string[];
    technologies: string[];
}
import { useState } from "preact/hooks";

export default function Job(job: jobProps) {
    const [clicked, setClicked] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    function handleClick (){
        setClicked(!clicked);
    }
    return (
    <article class="container job-experience">
        <div class="top-content">
            <div class="info">
                <h5 class="company">{job.company}</h5>
                <p class="position">{job.position}</p>
                <span class="date">{job.date}</span>
            </div>
            <img src={`companies/${job.logo}`} alt={job.company} />
        </div>
        <div class={isExpanded ? "bottom-content shown-v" : "bottom-content hidden-v"}>
            <div class="bottom-content_copy">
                <div class={clicked ? "accomplishments shown" : "accomplishments hidden"}>
                    <span class="acc-head">Accomplishments</span>
                    <ul>
                        {job.accomplishments.map((accomplishment:string) => (
                            <li>{accomplishment}</li>
                        ))}
                    </ul>
                </div>
                <div class={clicked ? "technologies hidden" : "technologies shown"}>
                    <span class="tech-head">Technologies</span>
                    <ul>
                        {job.technologies.map((technology:string) => (
                            <li>{technology}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <EvenSwitchBtn b1="accomplishments" b2="Technologies" callback={handleClick} />
        </div>
        <button class="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? ")--Show Less--(" : "(--Show More--)"}</button>
    </article>
    )
}
