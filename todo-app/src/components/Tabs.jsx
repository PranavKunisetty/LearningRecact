

export function Tabs({todos , selectedTab, setSelectedTab}) {

    const tabs = ['All', 'Open', 'Completed']

    function setClickedTab(tab) {
        setSelectedTab(tab)

    } 

    return (
        <nav className= "tab-container" style={{ paddingTop : '0.5rem'}}>
            {tabs.map((tab, tabIndex) => {

                const numOfTasks =  tab === 'All' ? 
                    todos.length : tab === 'Completed' ? 
                    todos.filter(todo => todo.completed).length : 
                    todos.filter(todo => !todo.completed).length;

                return (
                    <button key={tabIndex}
                    className={`tab-button ${selectedTab === tab ? 'tab-selected' : ''}`} onClick={() => setClickedTab(tab)}> 
                        <h4>{tab}<span> ({numOfTasks})</span></h4>
                    </button>
                )                
            })}
            <hr></hr>
        </nav>
    )
}