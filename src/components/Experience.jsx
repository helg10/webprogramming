import { STYLES } from "./styles/theme";

function Experience() {
    return (
       <section className={STYLES.card}>
            <h2 className={STYLES.title}>Досвід програмування</h2>
            <p className="text-stone-700 dark:text-gray-300">
                <span className="font-bold text-[#8c532b] dark:text-amber-300">Python</span> вивчав ще зі школи та протягом семестру в університеті, а 
                також самостійно на сайті codewars. <br/> Написав програми для шифрування тексту, роботи 
                з лог-файлами, скрипти, працював з бібліотеками numpy. <br/> Продовжую вивчати Python самостійно 
                та в рамках дисципліни "Програмування скриптовими мовами".
                <br/> <br/>
                <b className="text-[#8c532b] dark:text-amber-300">C#</b> — вивчав протягом 2 семестру, освоїв синтаксис та написав декілька простеньких програм з принципами ооп.
                <br/><br/>
                Вивчаю <b className="text-[#8c532b] dark:text-amber-300">Rust</b>. <br/>
                Брав участь у хакатоні: 
                <a 
                href="https://github.com/erorr-404/Larp-Team-BEST-HACKath0n" 
                target="_blank" 
                title="Git-репозиторій"
                className={STYLES.link}
                >Git</a>
            </p>
        </section>
    );
}

export default Experience;