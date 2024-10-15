import { json } from '@sveltejs/kit';
import { getWorkbench } from '../../workbench/getWorkbench';


export async function GET({ params }) {
	try {
		const workbench = await getWorkbench({ limit: params.size });

		return json(workbench);
	} catch (error) {
		return json([]);
	}
}
