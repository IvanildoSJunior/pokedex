import next from '../assets/images/right_arrow.png';


function NextPrevButton({className}) {
    return (
        <div className={className}>
            <img src={next} alt='next' />
        </div>
    )
}

export default NextPrevButton