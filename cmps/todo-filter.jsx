


export function TodoFilter(props) {
    return <section className="todo-filter">

        <select name="filterBy" onChange={(ev) => props.onSetFilter(ev)} >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="done">Done</option>
        </select>
        {/* <input type="text" id="by-search" placeholder="🔎 search" name="search" value={search} onChange={this.handleChange} /> */}

    </section>

}