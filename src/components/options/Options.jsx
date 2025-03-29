import style from "./Options.module.css"
export default function Options ({updateFeedback, totalFeedback, resetFeedback}) {
    return (
        <div>
            <button className={style.btnOp} onClick={() => updateFeedback("good")}>Good </button>
            <button className={style.btnOp} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={style.btnOp} onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button className={style.btnOp} onClick={resetFeedback}>Reset</button>}
        </div>
    )
}