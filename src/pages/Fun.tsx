import { Link } from 'react-router-dom';
import page from './Page.module.css';

export default function Fun() {
  return (
    <div>
      <div className={page.hero}>
        <span className={`${page.titleJa} jp`}>遊び</span>
        <h1 className={page.title}>Fun</h1>
        <p className={page.lead}>
          The playground — quizzes and games built on top of your collection, to turn
          reading into speaking and hearing.
        </p>
      </div>
      <div className={page.empty}>
        <strong>Coming soon.</strong> Planned here: a spaced-repetition flashcard drill
        over any module, an opposite-pair matching game, and a listening mode once audio
        lands. For now, study the cards in{' '}
        <Link to="/research">Research</Link>.
      </div>
    </div>
  );
}
