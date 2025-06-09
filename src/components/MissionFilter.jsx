
function MissionFilter({ setFilter }) {

    const STATUSES = ["All", "Planned", "In Progress", "Completed"];

    return (
        <>
            {
                STATUSES.map((status, index) => (
                    <button
                        key={index}
                        onClick={() => setFilter(status)}
                        className={styles.button}
                    >
                        {status}
                    </button>
                ))
            }

        </>
    );
}