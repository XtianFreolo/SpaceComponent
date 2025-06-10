import styles from "./MissionAction.module.css";

function MissionAction({ missionId, onUpdateMissionStatus }) {
    const STATUSES = ["Planned", "Active", "Completed"];

    return (
        <div>
            {STATUSES.map((status, index) => (
                <button
                    key={index}
                    onClick={() => onUpdateMissionStatus(missionId, status)}
                    className={styles.button}
                >
                    {status}
                </button>
            ))}
        </div>
    );
}

export default MissionAction;