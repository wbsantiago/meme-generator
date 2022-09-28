import './form.css'

export default function Form() {
    return (
        <form>
            <div className="form--input">
            <label><input type="text" name="" id="" placeholder="Shut up" /></label>
            <label><input type="text" name="" id="" placeholder="and take my money" /></label>
            </div>
            <button type="submit">Get a new meme image </button>
        </form>
    )
}