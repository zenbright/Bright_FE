import {Tldraw} from 'tldraw';
import 'tldraw/tldraw.css';

export default function PersistenceKey() {
  return (
    <div className="tldraw__editor">
      <Tldraw persistenceKey="example" />
    </div>
  );
}
