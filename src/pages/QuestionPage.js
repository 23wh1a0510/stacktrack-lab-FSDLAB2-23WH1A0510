import React, { useEffect, useState } from 'react';
import QuestionComponent from '../components/question/QuestionComponent';
import { fetchTasksByStatus } from '../api/client';

function QuestionPage() {
  // Part 2: State and fetch logic for status-based task retrieval.
  const [status, setStatus] = useState('pending');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadTasks() {
      setLoading(true);
      setError('');

      try {
        const data = await fetchTasksByStatus(status);
        if (isMounted) {
          setTasks(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to fetch tasks.');
          setTasks([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, [status]);

  return (
    <div>
      <h1>Question Page</h1>
      <QuestionComponent />

      {/* Part 3: UI to select status and display fetched tasks. */}
      <h2>Tasks Filtered By Status</h2>
      <label htmlFor="status-filter">Status:</label>{' '}
      <select
        id="status-filter"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      {loading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <strong>{task.title}</strong> - {task.description} ({task.status})
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && tasks.length === 0 && (
        <p>No tasks found for status: {status}</p>
      )}
    </div>
  );
}

export default QuestionPage;
