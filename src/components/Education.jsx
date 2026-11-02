import { STYLES } from "./styles/theme";

function Education(){
    return (
        <section className={STYLES.card}>
            <h2 className={STYLES.title}>Навчання та освіта</h2>
            <p className="text-stone-700 dark:text-gray-300">
                Навчаюся на 2 курсі в ІКТА Національного університету "Львівська Політехніка" на спеціальності<br/>
                <a href="https://directory-new.lpnu.ua/majors/subject/ikta/6.F5.00.01/8/2025/ua/full/6/22860" 
                target="_blank" 
                title="Моя навчальна програма"
                className={STYLES.link}>
                <span className="font-bold text-[#8c532b] dark:text-amber-300">"Кібербезпека та захист інформації (F5)"</span></a>
            </p>
            <p className="text-stone-700 dark:text-gray-300 mt-3">
                Закінчив курс <span className="font-bold text-[#8c532b] dark:text-amber-300">Linux network administration</span> від компанії <em>PortaOne</em>
            </p>
        </section>
    );
}

export default Education;