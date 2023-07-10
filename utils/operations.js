export const filterUnits = (data,keyword) => {
    if(!Array.isArray(data)) console.log('Data is not an array')
    const res = data.filter((f) => {
        const unit = f.UnitCode
        console.log(typeof(unit))
        if (unit.includes(keyword)) return (unit.toLowerCase().includes (keyword.toLowerCase()))
        else if (f.UnitName.toLowerCase().includes(keyword.toLowerCase())) return (f.UnitName.toLowerCase().includes(keyword.toLowerCase()))
        else if(f.Course.toLowerCase().includes(keyword.toLowerCase())) return (f.Course.toLowerCase().includes(keyword.toLowerCase()))
        else if(f.Years.toLowerCase().includes(keyword.toLowerCase())) return (f.Years.toLowerCase().includes(keyword.toLowerCase()))

    })
    return res

}