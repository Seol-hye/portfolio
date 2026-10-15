
export default function SkillSection({ group }) {
    return (
        <section className="skill-section reveal">
            <h3>{group.category}</h3>

            <div className="skill-items">
                {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}
