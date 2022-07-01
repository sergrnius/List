import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployesList from '../employes-list/employes-list';
import EmployesAddForm from '../employes-add-form/employes-add-form';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    addItem = (name, salary) => {   
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // let index = data.findIndex(elem => elem.id === id)
            // let before = data.slice(0, index)
            // let after = data.slice(index + 1)
            // let newArr = [...before, ...after]


            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     let index = data.findIndex(elem => elem.id === id);

        //     let oldArr = data[index];
        //     let newItem = {...oldArr, increase: !oldArr.increase};
        //     let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
            
        // })

        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }

                return item
            })
        }))
    }

    onToggleRise = (id) => {
        // this.setState(({data}) => {
        //     let index = data.findIndex(elem => elem.id === id);

        //     let oldArr = data[index];
        //     let newItem = {...oldArr, rise: !oldArr.rise};
        //     let newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
    
        //     return {
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }

                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if(items.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThen1000': 
                return items.filter(item => item.salary > 1000);
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}))
    }
    
    onUpdateSearch = (term) => {
        this.setState({term})
    }


    render() {
        let {data, term, filter} = this.state;
        let employes = this.state.data.length;
        let increased = this.state.data.filter(item => item.increase).length;
        let visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return(
            <div className="app">
                <AppInfo 
                employes={employes}
                increased={increased}/>
                <div className="search-panel">
                    <SearchPanel 
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;