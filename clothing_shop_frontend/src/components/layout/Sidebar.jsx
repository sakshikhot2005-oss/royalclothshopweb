function Sidebar({
  title = "Filters",
  children,
  open = true
}) {
  if (!open) {
    return null;
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>{title}</h3>
      </div>

      <div className="sidebar-content">
        {children}
      </div>
    </aside>
  );
}

export default Sidebar;