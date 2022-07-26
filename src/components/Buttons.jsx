
const Button = ({ Buttons, buttonColor}) => {
const objAppStyle={backgroundColor:buttonColor}
return(
<div className='container__Button'  >
    <button onClick={Buttons} style={objAppStyle}>&#62;</button> 
</div>
)
}
export default Button;