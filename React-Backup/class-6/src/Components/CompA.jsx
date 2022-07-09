import CompB from './CompB'
let CompA = () => {
    let name = 'Rahul Gandhi'
    let loc = ['Wayanad', 'New Dehli']
    return <div>
        <h1>Component A</h1>
        <CompB ename={name} eloc={loc} />
    </div>
}
export default CompA