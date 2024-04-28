import prev from '../assets/images/left_arrow.png';

function PrevButton({className}) {
    return(
        <div className={className} >
            <img src={prev}alt='prev'/>
        </div>
    )
}

export default PrevButton