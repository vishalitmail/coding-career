function Button({ setColor, colorName = 'grey' }) {
    let capital = colorName.toUpperCase()


    return (

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: colorName }} onClick={() => setColor(colorName)}>{capital}
        </button>

    )
}


export default Button
