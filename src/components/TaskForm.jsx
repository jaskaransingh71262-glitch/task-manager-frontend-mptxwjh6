import React from 'react';
const TaskForm = ({ title, description, onChangeTitle, onChangeDescription, onCreateTask, loading, error }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onCreateTask();
    }}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={title} onChange={onChangeTitle} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea className="form-control" id="description" value={description} onChange={onChangeDescription} />
      </div>
      <button type="submit" className="btn primary-button" disabled={loading}>{loading ? 'Creating...' : 'Create Task'}</button>
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
};
export default TaskForm;