import { STYLES } from "./styles/theme";

function CodingEnv(){
    return (
        <section className={STYLES.card}>
            <h2 className={STYLES.title}>Середовище програмування</h2>
            <ul className="list-disc pl-[20px] text-gray-700 dark:text-gray-300">
                <li><em>Vs code</em></li>
                <li><em>Zed</em></li>
                <li><em>Pycharm</em></li>
            </ul>
        </section>
    );
}

export default CodingEnv;