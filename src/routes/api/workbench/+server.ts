import { json } from '@sveltejs/kit';
import { getWorkbench } from './getWorkbench';

export async function GET() {
	try {
		const workbench = await getWorkbench();

		return json(workbench);
	} catch (error) {
		return json([]);
	}
}
