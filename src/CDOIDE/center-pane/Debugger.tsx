import "./styles/debugger.css";

export const Debugger = () => {
  return (
    <div className="debugger-pane">
      <div className="debugger-title-bar">
        <div className="debugger-title">Console</div>
        <button onClick={() => alert("not implemented")}>Clear console</button>
      </div>
      <div className="debugger-view">(debugger content would go here)</div>
    </div>
  );
};
