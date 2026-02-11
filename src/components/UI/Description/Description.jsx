const Description = ({
    text,
    align="center",
    className=""
}) => {
    return (
        <>
        <p className={`primary-description text-${align} ${className}`}> {text} </p>
       </>
    )
}

export default Description;