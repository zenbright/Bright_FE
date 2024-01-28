import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

export default function Board () {
	return (
		<div className = 'ml-[6vw]'style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
	)
}