import styles from '@/app/dashboard/dashboard.module.css'

export default function DashboardLayout({ children }) {
    return <div className={styles.dashboard}>
        {children}
    </div>
}