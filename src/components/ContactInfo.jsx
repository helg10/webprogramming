import { STYLES } from "./styles/theme";

function ContactInfo(){
    return(
        <section className={STYLES.card}>
            <h2 className={STYLES.title}>Контактна інформація</h2>
            <address className="non-italic flex flex-row gap-[15px]">
                <a href="" target="_blank" 
                title="mailto:oleh.kotiash.kb.2025@lpnu.ua"
                className={STYLES.link}>Email</a> <br/>
                <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" 
                title="Посилання на LinkedIn"
                className={STYLES.link}>LinkedIn</a>
            </address>
        </section>
    );
}

export default ContactInfo;