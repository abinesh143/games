const Toast = (props) => {
  return (
    <main>
      <div className="fixed-bottom shadow-lg rounded bg-black text-white m-2 p-2">
        <div className="d-flex justify-content-between pb-2">
          <div className="mx-2 fw-semibold">Add Games to Home Screen</div>
          <div className="px-2 fw-semibold" onClick={() => props.closeToast()}>X</div>
        </div>
        <div className="d-flex mt-2 pb-1">
          <button className="mx-2 btn btn-success px-4" onClick={() => props.triggerInstall()}>Add Game</button>
          <button className="mx-2 btn btn-secondary" onClick={() => props.closeToast()}>Close</button>
        </div>
      </div>
    </main>
  );
};

export default Toast;
