export async function fetchTasksByStatus(status = 'pending') {
	const response = await fetch(`/api/tasks?status=${encodeURIComponent(status)}`);

	if (!response.ok) {
		throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
	}

	return response.json();
}

