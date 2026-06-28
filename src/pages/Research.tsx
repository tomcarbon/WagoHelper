import { MODULES } from '../data/modules';
import ModuleCard from '../components/ModuleCard';
import page from './Page.module.css';

export default function Research() {
  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>研究</span>
        <h1 className={page.title}>Research</h1>
        <p className={page.lead}>
          Every module in the collection. Open one to drill into its submodules and study
          the entries, filtering by native vs. non-native as you go.
        </p>
      </div>
      <div className={page.grid}>
        {MODULES.map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </div>
    </div>
  );
}
