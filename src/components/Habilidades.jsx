export const handleHA = (ha) => {
    if(ha[1])
        {
            return ha[0].ability.name +" | "+ ha[1].ability.name;
        }
    return ha[0].ability.name;
}