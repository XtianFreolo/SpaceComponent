

function MissionControl({ initialMissions }) {

    const INITIAL_FILTER = "All";

    const [missions, setMissions] = useState(initialMissions);
    const [filter, setFilter] = useState(INITIAL_FILTER);

    function updateMissionStatus(id, newStatus) {
        setMissions(prevMissions => prevMissions.map(mission => mission.id === id ? { ...mission, status: newStatus } : mission));
    }

    const filteredMissions = missions.filter(mission => filter === "All" || mission.status === filter);

    return (
        <div>
            <h1> SPace Mission Control</h1>

            <div className={styles.filterContainer}>
                <MissionFilter setFilter={setFilter} />
            </div>
            {
                filteredMissions.map(mission => {
                    const { id, name, status, crew } = mission;

                    return (
                        <div key={id} className={styles.missionContainer}>
                            <div> <MissionCard name={name} status={status} crew={crew} /> </div>

                            <div> <MissionAction missionId={id} onUpdateMissionStatus={updateMissionStatus} /> </div>

                        </div>
                    );
                })
            }
        </div>
    );

}