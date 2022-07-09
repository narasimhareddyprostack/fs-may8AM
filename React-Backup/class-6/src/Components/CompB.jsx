let CompB = (props) => {
    return <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Name:{props.ename}</h4>
        <h4>Emp Loc:{props.eloc[1]}</h4>
    </div>
}
export default CompB