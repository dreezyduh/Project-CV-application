import Buttons from "./Buttons";

function Section({title, children, editMode, callback}) {
    return (
        <section>
        <h1>{title}</h1>
            <form>
                {children}
                    <div className="buttons">
                        <Buttons value = {editMode ? "Edit" : "Submit"} onClick={callback}/>
                    </div>
            </form>
    </section>
    )
}

export default Section