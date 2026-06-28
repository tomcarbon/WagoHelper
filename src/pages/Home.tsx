import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { getModule } from '../data/modules';
import ModuleCard from '../components/ModuleCard';
import page from './Page.module.css';

export default function Home() {
  const { settings } = useSettings();
  const modules = settings.homeModuleIds
    .map((id) => getModule(id))
    .filter((m) => m !== undefined);

  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>ようこそ</span>
        <h1 className={page.title}>Your kunyomi collection</h1>
        <p className={page.lead}>
          Native-first Japanese, starting from the original island readings. Below are
          your selected modules — change which appear from{' '}
          <Link to="/settings">Settings</Link>.
        </p>
      </div>

      {modules.length === 0 ? (
        <div className={page.empty}>
          No modules are pinned to Home yet. Pick some in{' '}
          <Link to="/settings">Settings</Link>, or browse everything in{' '}
          <Link to="/research">Research</Link>.
        </div>
      ) : (
        <div className={page.grid}>
          {modules.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      )}
    </div>
  );
}
