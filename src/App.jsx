import styles from './App.module.css';

import MissionControl from './components/MissionControl.jsx';


function App() {

    const INITIAL_MISSIONS = [{
        id: 1, name: "Mars Rover", status: "Planned", crew: ["Alice, Bob"]
    }

        ,
    {
        id: 2, name: "Moon Base", status: "Active", crew: ["Charlie", "Dave"]
    }

        ,
    {
        id: 3, name: "Venus Observetory", status: "Planned", crew: ["Eve", "Frank"]
    }

        ,
    {
        id: 4, name: "Jupiter Moons Survey", status: "Completed", crew: ["Grace", "Hank"]
    }

        ,
    {
        id: 5, name: "Asteroid Belt Mining", status: "Active", crew: ["Ivy", "John"]
    }

        ,
    {
        id: 6, name: "Saturn Rings Exploration", status: "Planned", crew: ["Kate", "Leo"]
    }

        ,
    {
        id: 7, name: "Deep Space Probe", status: "Completed", crew: ["Mia", "Nolan"]
    }

        ,
    {
        id: 8, name: "Interstellar Observatory", status: "Planned", crew: ["Olivia", "Pete"]
    }

        ,
    {
        id: 9, name: "Neptune Atmosphere Study", status: "Active", crew: ["Quinn", "Rita"]
    }

        ,
    {
        id: 10, name: "Pluto Flyby", status: "Completed", crew: ["Sam", "Tina"]
    }

    ];

    return (<div className={
        styles.mainContainer
    }

    > <MissionControl initialMissions={
        INITIAL_MISSIONS
    }

        /> </div>);
}

export default App;
