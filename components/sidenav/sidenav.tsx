import styles from "./sidenav.module.css";

export default function SideNav({open, children}) {

    if (typeof window !== 'undefined') {
        if (open) {
            document.body.classList.add(styles.disableScroll);
        } else {
            document.body.classList.remove(styles.disableScroll);
        }
    }

	return (
        <div className={`${styles.menuPanel} ${open ? styles.openPanel : styles.closePanel}`}>
            {children}
        </div>
	);
}