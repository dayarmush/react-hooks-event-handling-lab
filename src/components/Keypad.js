// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type='text' name='password' onChange={() => console.log('Entering password...')} />
        </div>
    )
}

export default Keypad;