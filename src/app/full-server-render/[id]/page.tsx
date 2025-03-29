import { UserCard } from '@/app/components/UserCard';
import styles from './page.module.scss';

export default async function FullServerRender({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Full Server Render Demo</h1>
        <p>This page demonstrates full server-side rendering with React</p>

        <div className={styles.demoSection}>
          <UserCard id={id} />
        </div>
      </main>
    </div>
  );
}
