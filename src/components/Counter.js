const Counter = () => {
    return(
        <div>
            <div className="counter">
                <p>0</p>
            </div>
            <div className="buttons">
                    <button>Add one</button>
                    <button>Remove one</button>
                    <button>Reset</button>
            </div>
        </div>
    );
};

export default Counter;