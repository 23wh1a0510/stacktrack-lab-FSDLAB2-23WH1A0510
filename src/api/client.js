const API_BASE_URL = 'http://localhost:5000';

export async function fetchTasksByStatus(status = 'pending') {
	const response = await fetch(
		`${API_BASE_URL}/api/tasks?status=${encodeURIComponent(status)}`
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch tasks. Status: ${response.status}`);
	}

	return response.json();
}

