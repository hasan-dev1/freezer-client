const ButtonSpinner = ({text, handler, action, classess}) => {
    return (
      <button onClick={handler} className={classess || "btn btn-primary px-12"}>
        {action ? (
          <span className="animate-spin h-6 w-6 border-2 border-dashed rounded-full mr-3"></span>
        ) : (
          text
        )}
        {action ? text + "..." : ""}
      </button>
    );
};

export default ButtonSpinner;