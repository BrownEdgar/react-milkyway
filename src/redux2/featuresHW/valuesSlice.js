export const initialValuesValue = [ 
    {
      id: 1,
      name: 'foo'
    },
    {
      id: 2,
      name: 'bar'
    },
    {
      id: 3,
      name: 'baz',
      price: 12.4
    }
]

export function valuesReducer(state = initialValuesValue, action) {
    switch (action.type) {
        case "values": return state.filter(elem => Object.hasOwn(elem, "price"))
    
    
        default: return state;
    }
}