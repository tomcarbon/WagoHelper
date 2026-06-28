import { Link, useParams } from 'react-router-dom';
import { getModule } from '../data/modules';
import ModuleView from '../components/ModuleView';
import page from './Page.module.css';

export default function ModulePage() {
  const { moduleId } = useParams();
  const module = moduleId ? getModule(moduleId) : undefined;

  if (!module) {
    return (
      <div className={page.empty}>
        That module doesn’t exist. Back to <Link to="/research">Research</Link>.
      </div>
    );
  }

  return (
    <div>
      <div className={page.hero}>
        <Link to="/research" className="jp" style={{ fontSize: '0.85rem' }}>
          ← 研究 Research
        </Link>
        <span className={`${page.titleJa} jp`} style={{ marginTop: '0.6rem' }}>
          {module.titleJa}
        </span>
        <h1 className={page.title}>{module.title}</h1>
        {module.intro && <p className={page.lead}>{module.intro}</p>}
      </div>
      <ModuleView module={module} />
    </div>
  );
}
